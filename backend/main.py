from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Any

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class loginCredentials(BaseModel):
    email: str
    password: str


class newUserPayload(BaseModel):
    firstName: str
    lastName: str
    email: str
    dob: str


@app.post("/api/auth/login")
async def authenticate_user(
    credentials: loginCredentials,
) -> dict[str, str]:
    # Mock login information for the time being
    if credentials.email == "test@email.com":
        return {"status": "success", "message": "Successful login"}
    raise HTTPException(status_code=400, detail="Email address not found")


@app.post("/api/auth/signup")
async def signup_user(payload: newUserPayload) -> dict[str, str]:
    if payload.email == "test@email.com":
        raise HTTPException(status_code=400, detail="Email address already in use!")
    return {"status": "success", "message": "User not added successfully"}


@app.get("/api/projects")
async def fetch_project_catalogue() -> list[dict[str, Any]]:
    return [
        {
            "id": "proj_001",
            "name": "Eco-Friendly Urban Agriculture",
            "location": "London, UK",
            "imageUrl": "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&q=80&w=800",
            "targetAmount": 150000,
            "raisedAmount": 125000,
            "expectedReturnPercentage": 8.5,
        },
        {
            "id": "proj_002",
            "name": "NextGen Solid State Batteries",
            "location": "Berlin, Germany",
            "imageUrl": "https://images.unsplash.com/photo-1620803584857-e685f02bc569?auto=format&fit=crop&q=80&w=800",
            "targetAmount": 500000,
            "raisedAmount": 50000,
            "expectedReturnPercentage": 15.0,
        },
        {
            "id": "proj_003",
            "name": "AI-Driven Supply Chain Logistics",
            "location": "Austin, TX",
            "imageUrl": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
            "targetAmount": 250000,
            "raisedAmount": 250000,
            "expectedReturnPercentage": 12.0,
        },
        {
            "id": "proj_004",
            "name": "Biodegradable Packaging Solutions",
            "location": "Toronto, Canada",
            "imageUrl": "https://images.unsplash.com/photo-1605600659908-0ef719419d41?auto=format&fit=crop&q=80&w=800",
            "targetAmount": 75000,
            "raisedAmount": 30000,
            "expectedReturnPercentage": 6.5,
        },
    ]
