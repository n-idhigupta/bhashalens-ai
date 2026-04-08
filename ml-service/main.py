from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import os

app = FastAPI()

# Allow requests from frontend/backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class AnalyzeRequest(BaseModel):
    text: str = ""
    fileName: str = "unknown_file"

@app.get("/")
def home():
    return {"message": "BhashaLens ML Service is running!"}

@app.post("/analyze")
def analyze(data: AnalyzeRequest):
    # Mock AI logic
    result = {
        "fileName": data.fileName,
        "detectedLanguage": "Hindi",
        "summary": f"Mock AI summary for: {data.text[:50]}",
        "extractedText": data.text if data.text else "Sample extracted content from file",
        "fileType": "text"
    }

    return result