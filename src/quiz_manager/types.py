from typing import NamedTuple

from pydantic import BaseModel


class Position(NamedTuple):
    lng: float
    lat: float


class OptionWithoutAnswer(BaseModel):
    option: str


class OptionWithAnswer(OptionWithoutAnswer):
    correct: bool


class QuestionWithoutAnswer(BaseModel):
    question: str
    answers: list[OptionWithoutAnswer]


class QuestionWithAnswer(BaseModel):
    question: str
    answers: list[OptionWithAnswer]


class QuizWithoutAnswerWithoutId(BaseModel):
    name: str
    pos: Position
    questions: list[QuestionWithoutAnswer]


class QuizWithoutAnswer(QuizWithoutAnswerWithoutId):
    quiz_id: str


class QuizWithAnswerWithoutId(BaseModel):
    name: str
    pos: Position
    questions: list[QuestionWithAnswer]


class QuizWithAnswer(QuizWithAnswerWithoutId):
    quiz_id: str

class QuizForCheck(BaseModel):
    quiz_id: str
    answers: list[str]

class AnswersComparison(BaseModel):
    correct_answer: str
    users_answer: str

class QuizResults(BaseModel):
    quiz_id: str
    score: int
    percentage: int
    explanation: list[AnswersComparison]

Quizzes = list[QuizWithAnswer]

QuizzesWithoutAnswer = list[QuizWithoutAnswer]
