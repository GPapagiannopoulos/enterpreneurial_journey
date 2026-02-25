from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True, 
    allow_methods=["*"],
    allow_headers=["*"]
)
class loginCredentials(BaseModel):
    email:str
    password:str

class newUserPayload(BaseModel):
    firstName:str
    lastName:str
    email:str
    dob:str

@app.post("/api/auth/login")
async def authenticate_user(credentials: loginCredentials):
    # Mock login information for the time being 
    if (credentials.email == "test@email.com"):
        return {"status": "success", "message": "Successful login"}
    raise HTTPException(status_code=400, detail="Email address not found")

@app.post("/api/auth/signup")
async def signup_user(payload: newUserPayload):
    if (payload.email == "test@email.com"):
        raise HTTPException(status_code=400, detail="Email address already in use!")
    return {"status": "success", "message": "User not added successfully"}
