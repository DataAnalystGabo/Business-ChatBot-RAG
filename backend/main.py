import os
from dotenv import load_dotenv
from pydantic import BaseModel
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from langchain_groq import ChatGroq
from langchain.prompts import PromptTemplate

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


load_dotenv()
GROQ_API_KEY = os.getenv("GROQ_API_KEY")


@app.post("/")
async def handler_messages(message: Message):
    question_user = message

    # 1. Ejecutar RAG
    # código

    # 2. Llamar al LLM
    llm = ChatGroq(
        model="llama3-70b-8192",
        temperature=0.2,
        max_tokens=100,
        timeout=None,
        max_retries=2,
    )

    prompt_template = PromptTemplate(
        template="""
        Eres un asistente al cliente de una empresa de turismo llamada Aventura Trek. Tu misión será resolver las dudas del cliente basandote exclusivamente en el contexto dado.
        Ayudemos al cliente con su pregunta: {question_user}
        """,
        variables_template=["question_user"],
    )

    formatted_prompt = prompt_template.format(question_user=question_user)

    response = llm.invoke(formatted_prompt)

    print(response.content)

    # 3. Devolución al frontend
    return {"message": response.content}
