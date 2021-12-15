from json import loads
import asyncio
from typing import Any, Awaitable, Callable

from fastapi import FastAPI, Depends, HTTPException, status
import httpx

from .types import AnswersComparison, QuizForCheck, QuizResults, QuizWithAnswer, QuizWithAnswerWithoutId, QuizWithoutAnswer, QuizzesWithoutAnswer
from .settings import Settings, get_settings

app = FastAPI(openapi_tags=[{"name": "service:quiz_manager"}])

@app.get("/quiz_manager/{quiz_id}", response_model=QuizWithoutAnswer, tags=["service:quiz_manager"])
async def get_quiz(quiz_id: str, settings: Settings = Depends(get_settings)):
    async with httpx.AsyncClient() as client:
        res = loads((await client.get(f"{settings.quizzes_url}quizzes/{quiz_id}")).text)
        print(res)
        for question in res["questions"]:
            for answ in question["answers"]:
                del answ["correct"]
        print(res)
    return res

@app.post("/quiz_manager/{quiz_id}", response_model=QuizResults, tags=["service:quiz_manager"])
async def check_quiz(quiz_id: str, submitted_quiz: QuizForCheck, settings: Settings = Depends(get_settings)):
    async with httpx.AsyncClient() as client:
        res = loads((await client.get(f"{settings.quizzes_url}quizzes/{quiz_id}")).text)
        answers = []
        for question in res["questions"]:
            for answer in question["answers"]:
                if answer["correct"] == True and answer["option"]:
                    answers.append(answer["option"])
        user_answers = submitted_quiz.answers
        quantity = min(len(user_answers), len(answers))
        total_score = 0
        comparison = []
        for i in range(quantity):
            if(user_answers[i] == answers[i]):
                total_score += 1
            comparison.append(AnswersComparison(correct_answer=answers[i], users_answer=user_answers[i]))
        percent = int(total_score / quantity * 100)
        print(total_score)
        return(QuizResults(quiz_id=quiz_id, score=total_score, percentage=percent, explanation=comparison))
