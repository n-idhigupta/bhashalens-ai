from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def root():
    return {
        "success": True,
        "message": "BhashaLens AI ML service is running 🚀"
    }