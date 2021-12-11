from json import loads
import asyncio
from typing import Any, Awaitable, Callable

from fastapi import FastAPI, Depends, HTTPException, status
import httpx

from .types import QuizWithAnswer, QuizWithScore
from .settings import Settings

app = FastAPI(openapi_tags=[{"name": "service:quiz_manager"}])

@app.get("/quiz_manager/{quiz_id}", response_model=QuizWithoutAnswer)
async def get_quiz(quiz_id: str):
    async with httpx.AsyncClient() as client:
        res = loads((await client.get(f"{settings.quizzes_url}/quizzes/{quiz_id}")).text)
        return res

@app.post("/quiz_manager/{quiz_id}", response_model=QuizWithScore, tags="service:quiz_manager")
async def check_quiz():
    async with httpx.AsyncClient() as client:
        res = loads((await client.get(f"{settings.quizzes_url}/quizzes")).text)
        return res
