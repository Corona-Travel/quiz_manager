import asyncio
from json import loads
from typing import Any, Awaitable, Callable

import httpx
from fastapi import Depends, FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware


from .settings import Settings, get_settings
from .types import (
    AnswersComparison,
    QuizForCheck,
    QuizResults,
    QuizWithAnswer,
    QuizWithAnswerWithoutId,
    QuizWithoutAnswer,
    QuizzesWithoutAnswer,
)

app = FastAPI(openapi_tags=[{"name": "service:quiz_manager"}])
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get(
    "/quiz_manager/{quiz_id}",
    response_model=QuizWithoutAnswer,
    tags=["service:quiz_manager"],
)
async def get_quiz(quiz_id: str, settings: Settings = Depends(get_settings)):
    async with httpx.AsyncClient() as client:
        res = await client.get(f"{settings.quizzes_url}quizzes/{quiz_id}")

        if res.status_code == status.HTTP_404_NOT_FOUND:
            raise HTTPException(
                status_code=404, detail="Quiz with specified id was not found"
            )

        quiz = loads(res.text)
        for question in quiz["questions"]:
            for answer in question["answers"]:
                del answer["correct"]
    return quiz

@app.get("/quiz_manager/all/quizzes", response_model=QuizzesWithoutAnswer, tags=["service:quiz_manager"])
async def get_all_quizzes(settings: Settings = Depends(get_settings)):
    async with httpx.AsyncClient() as client:
        res = await client.get(f"{settings.quizzes_url}quizzes")

        quizzes = loads(res.text)
        for quiz in quizzes:
            for question in quiz["questions"]:
                for answer in question["answers"]:
                    del answer["correct"]
        return quizzes


@app.post("/quiz_manager/{quiz_id}", response_model=QuizResults, tags=["service:quiz_manager"])
async def check_quiz(quiz_id: str, submitted_quiz: QuizForCheck, settings: Settings = Depends(get_settings)):
    async with httpx.AsyncClient() as client:
        res = await client.get(f"{settings.quizzes_url}quizzes/{quiz_id}")

        if res.status_code == status.HTTP_404_NOT_FOUND:
            raise HTTPException(
                status_code=404, detail="Quiz with specified id was not found"
            )

        quiz = loads(res.text)

        answers = []
        for question in quiz["questions"]:
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
