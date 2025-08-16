import requests

BASE_URL = "https://api.example.com"

def test_login_success():
    response = requests.post(f"{BASE_URL}/auth/login", json={
        "email": "user@test.com",
        "password": "password123"
    })
    assert response.status_code == 200
    data = response.json()
    assert "token" in data

def test_login_failed():
    response = requests.post(f"{BASE_URL}/auth/login", json={
        "email": "wrong@test.com",
        "password": "wrongpass"
    })
    assert response.status_code == 401
