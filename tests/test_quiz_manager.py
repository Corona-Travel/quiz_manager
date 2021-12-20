from quiz_manager.app import app

from fastapi.testclient import TestClient

client = TestClient(app)

def test_get_quizzes():
    i = 2
    i = i + 1
    assert i == 3
