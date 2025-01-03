from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

"""
Para ejecutar el servidor de FastAPI, ejecutamos el siguiente comando en la terminal: "fastapi dev main.py".
"""

app = FastAPI()

origins = ["http://localhost:5173"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return {"message": "Hola desde la API de Aventura Trek!"}
