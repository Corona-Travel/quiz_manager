from json import loads
import asyncio
from typing import Any, Awaitable, Callable

from fastapi import FastAPI, Depends, HTTPException, status
import httpx

from .types import QuizWithAnswer, QuizWithScore, QuizesWithoutAnswer
from .settings import Settings

app = FastAPI(openapi_tags=[{"name": "service:quiz_manager"}])

@app.get("/quiz_manager/{quiz_id}", response_model=QuizesWithoutAnswer)
async def get_quiz(quiz_id: str):
    async with httpx.AsyncClient() as client:
        res = loads((await client.get(f"{settings.quizzes_url}/quizzes/{quiz_id}")).text)
        for question in res.questions:
            for answ in question.answer:
                del answ.correct
        return res

@app.post("/quiz_manager/{quiz_id}", response_model=QuizWithScore, tags="service:quiz_manager")
async def check_quiz(submitted_quiz: QuizWithAnswer):
    async with httpx.AsyncClient() as client:
        res = loads((await client.get(f"{settings.quizzes_url}/quizzes")).text)
        return res
