import os
import uuid
from datetime import datetime, timezone
from typing import Optional

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr, Field
from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv

load_dotenv()

MONGO_URL = os.environ.get("MONGO_URL")
DB_NAME = os.environ.get("DB_NAME")

app = FastAPI(title="PRUMO Soalheiro API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

client = AsyncIOMotorClient(MONGO_URL)
db = client[DB_NAME]


class QuoteRequest(BaseModel):
    nome: str = Field(..., min_length=1, max_length=200)
    empresa: Optional[str] = Field(default="", max_length=200)
    email: EmailStr
    mensagem: str = Field(..., min_length=1, max_length=4000)


class QuoteResponse(BaseModel):
    id: str
    nome: str
    empresa: Optional[str]
    email: str
    mensagem: str
    created_at: str


@app.get("/api/health")
async def health():
    return {"status": "ok", "service": "prumo-api"}


@app.post("/api/quote", response_model=QuoteResponse)
async def create_quote(payload: QuoteRequest):
    doc = {
        "id": str(uuid.uuid4()),
        "nome": payload.nome.strip(),
        "empresa": (payload.empresa or "").strip(),
        "email": payload.email.lower(),
        "mensagem": payload.mensagem.strip(),
        "created_at": datetime.now(timezone.utc).isoformat(),
    }
    await db.quotes.insert_one(doc)
    return QuoteResponse(**{k: doc[k] for k in ("id", "nome", "empresa", "email", "mensagem", "created_at")})


@app.get("/api/quote", response_model=list[QuoteResponse])
async def list_quotes():
    items = await db.quotes.find({}, {"_id": 0}).sort("created_at", -1).to_list(200)
    return [QuoteResponse(**i) for i in items]
