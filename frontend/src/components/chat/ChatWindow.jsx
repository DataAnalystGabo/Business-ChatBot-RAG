import React, { useState } from "react";
import styled from "styled-components";
import ChatInput from "@chat/ChatInput";
import ChatMessageUser from "@chat/ChatMessageUser";
import ChatMessageIA from "@chat/ChatMessageIA";

const ChatWindow = ({ isOpen }) => {
  const [messages, setMessages] = useState([]);

  /* 
  Función recibe y almacena los mensajes del usuario.
  Además realiza la petición a la API y maneja la respuesta.
  */
  const receiveMessage = async (newMessage) => {
    setMessages([...messages, { sender: "user", text: newMessage }]);

    try {
      const response = await fetch("http://localhost:8000", {
        method: "POST", // Método POST para enviar datos
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: newMessage }), // Envía el mensaje en el cuerpo de la solicitud
      });

      if (!response.ok) {
        throw new Error("Error en la solicitud a la API");
      }

      const data = await response.json();
      setMessages([
        ...messages,
        { sender: "user", text: newMessage },
        { sender: "chatbot-ia", text: data.message },
      ]); // Agrega la respuesta de la API al estado
    } catch (error) {
      console.error("Error al obtener respuesta de la IA:", error);
      // Manejo de errores, por ejemplo, mostrar un mensaje al usuario
    }
  };

  return (
    <Container $isOpen={isOpen}>
      <Header>
        <p>Trek IA</p>
        <span></span>
      </Header>
      <Messages>
        {/* ... (mensajes del usuario) ... */}
        {messages.map((message, index) =>
          message.sender === "user" ? (
            <ChatMessageUser key={index} message={message.text} />
          ) : (
            <ChatMessageIA key={index} message={message.text} />
          )
        )}
      </Messages>
      <ChatInput setMessagesUser={receiveMessage} />
    </Container>
  );
};

export default ChatWindow;

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: "Inter", serif;
  font-optical-sizing: auto;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 200;
  line-height: 1.3;
  background-color: #000814;
  grid-area: chat;
  overflow: auto;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #f7f5fb;
  background-color: #141a28;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;

  p {
    padding: 2rem 1rem 2rem 2rem;
    margin: 0;
    font-weight: 700;
  }

  span {
    height: 0.5rem;
    width: 0.5rem;
    background-color: #00ff88;
    border-radius: 50%;
    animation: scaleDotGreen 2s ease-in-out infinite;
  }

  @keyframes scaleDotGreen {
    0% {
      transform: scale(0.8);
    }
    50% {
      transform: scale(1);
    }
    100% {
      transform: scale(0.8);
    }
  }
`;

const Messages = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  overflow-y: auto;
  -ms-overflow-style: none; /* IE 11 */
  scrollbar-width: none; /* Firefox */

  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari y Opera */
  }
`;
