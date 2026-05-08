"""Backend API tests for PRUMO Soalheiro: /api/health and /api/quote (POST/GET)."""
import os
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "").rstrip("/")
if not BASE_URL:
    # Fallback to frontend .env file
    with open("/app/frontend/.env") as f:
        for line in f:
            if line.startswith("REACT_APP_BACKEND_URL="):
                BASE_URL = line.split("=", 1)[1].strip().rstrip("/")


@pytest.fixture
def api():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# Health
def test_health_ok(api):
    r = api.get(f"{BASE_URL}/api/health", timeout=15)
    assert r.status_code == 200
    data = r.json()
    assert data.get("status") == "ok"


# Quote create + persistence
def test_quote_create_and_listed(api):
    payload = {
        "nome": "TEST_Joao",
        "empresa": "TEST_Empresa",
        "email": "TEST_joao@example.com",
        "mensagem": "TEST_Gostaria de um orcamento para uma moradia.",
    }
    r = api.post(f"{BASE_URL}/api/quote", json=payload, timeout=20)
    assert r.status_code == 200, r.text
    data = r.json()
    assert "id" in data and isinstance(data["id"], str) and len(data["id"]) > 0
    assert data["nome"] == payload["nome"]
    assert data["empresa"] == payload["empresa"]
    assert data["email"] == payload["email"].lower()
    assert data["mensagem"] == payload["mensagem"]
    assert "created_at" in data

    # GET should include this quote and never leak _id
    r2 = api.get(f"{BASE_URL}/api/quote", timeout=20)
    assert r2.status_code == 200
    items = r2.json()
    assert isinstance(items, list)
    assert any(q["id"] == data["id"] for q in items)
    for q in items:
        assert "_id" not in q


def test_quote_create_no_empresa(api):
    payload = {
        "nome": "TEST_Maria",
        "email": "TEST_maria@example.com",
        "mensagem": "TEST_Pequena remodelacao",
    }
    r = api.post(f"{BASE_URL}/api/quote", json=payload, timeout=20)
    assert r.status_code == 200, r.text
    assert r.json()["empresa"] == ""


# Validation
def test_quote_invalid_email_returns_422(api):
    r = api.post(f"{BASE_URL}/api/quote", json={
        "nome": "TEST_Bad",
        "email": "not-an-email",
        "mensagem": "TEST",
    }, timeout=15)
    assert r.status_code == 422


def test_quote_missing_nome_returns_422(api):
    r = api.post(f"{BASE_URL}/api/quote", json={
        "email": "TEST_x@example.com",
        "mensagem": "TEST",
    }, timeout=15)
    assert r.status_code == 422


def test_quote_empty_nome_returns_422(api):
    r = api.post(f"{BASE_URL}/api/quote", json={
        "nome": "",
        "email": "TEST_x@example.com",
        "mensagem": "TEST",
    }, timeout=15)
    assert r.status_code == 422


def test_quote_empty_mensagem_returns_422(api):
    r = api.post(f"{BASE_URL}/api/quote", json={
        "nome": "TEST_x",
        "email": "TEST_x@example.com",
        "mensagem": "",
    }, timeout=15)
    assert r.status_code == 422
