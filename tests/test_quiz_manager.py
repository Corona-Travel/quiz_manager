from quiz_manager.app import app

from fastapi.testclient import TestClient

client = TestClient(app)

def test_get_quizzes():
    response = client.get("/quiz_manager/all/quizzes")
    assert response.status_code == 200
    assert len(response.json()) == 10

def test_get_unexisting_quiz():
    response = client.get("/quiz_manager/some")
    assert response.status_code == 404
