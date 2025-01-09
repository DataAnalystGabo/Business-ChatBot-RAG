from fastapi import FastAPI
from pydantic import BaseModel
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


class Message(BaseModel):  # Define el esquema de la solicitud
    message: str


@app.post("/")  # Cambia el método a POST
async def root(message: Message):  # Recibe el mensaje en la solicitud
    # Aquí puedes procesar el mensaje y enviarlo a la API de Groq
    # ...
    print(f"Mensaje recibido desde el frontend: {message.message}")
    # Simula una respuesta de la API de Groq
    response_groq = "Esta es una respuesta simulada de la API de Groq"

    return {"message": response_groq}  # Devuelve la respuesta
