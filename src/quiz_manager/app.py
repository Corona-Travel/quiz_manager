import asyncio
from json import loads
from typing import Any, Awaitable, Callable

import httpx
from fastapi import Depends, FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware

from .settings import Settings, get_settings
from .types import (
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


@app.post(
    "/quiz_manager/{quiz_id}",
    response_model=QuizWithAnswer,
    tags=["service:quiz_manager"],
)
async def check_quiz(
    quiz_id: str,
    submitted_quiz: QuizWithAnswer,
    settings: Settings = Depends(get_settings),
):
    async with httpx.AsyncClient() as client:
        print(f"{settings.quizzes_url}/quizzes")
        res = loads((await client.get(f"{settings.quizzes_url}/quizzes")).text)
    return res
