from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from rembg import remove
from fastapi.responses import StreamingResponse
import io

app = FastAPI()

# 👇 Update with your actual Codespaces frontend origin
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "*",  # Replace this with your actual frontend Codespace domain
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/background-remover-python/")
async def remove_background(file: UploadFile = File(...)):
    input_data = await file.read()
    output_data = remove(input_data)
    return StreamingResponse(io.BytesIO(output_data), media_type="image/png")
