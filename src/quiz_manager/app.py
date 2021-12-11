from json import loads
import asyncio
from typing import Any, Awaitable, Callable

from fastapi import FastAPI, Depends, HTTPException, status
import httpx

from .types import QuizWithAnswer, QuizWithAnswerWithoutId, QuizWithoutAnswer, QuizzesWithoutAnswer
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

@app.post("/quiz_manager/{quiz_id}", response_model=QuizWithAnswer, tags=["service:quiz_manager"])
async def check_quiz(quiz_id: str, submitted_quiz: QuizWithAnswer, settings: Settings = Depends(get_settings)):
    async with httpx.AsyncClient() as client:
        print(f"{settings.quizzes_url}/quizzes")
        res = loads((await client.get(f"{settings.quizzes_url}/quizzes")).text)
    return res
