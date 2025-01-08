import React, { useState } from "react";
import styled from "styled-components";
import ChatInput from "./ChatInput";
import ChatMessageUser from "./ChatMessageUser";

const ChatWindow = ({ isOpen }) => {
  /*
  Componente que muestra la ventana del chat y maneja la visualización de los mensajes del usuario.

  Lógica:
  1. Se declara el estado 'messageUser' para almacenar el mensaje del usuario recibido del componente ChatInput.
  2. receiveMessageUser: 
    - Recibe el mensaje enviado por el usuario desde el componente ChatInput.
    - Actualiza el estado 'messageUser' con el nuevo mensaje.
  3. Se renderiza el componente ChatMessageUser, pasándole el estado 'messageUser' como prop para que lo muestre en pantalla.
  4. Se renderiza el componente ChatInput, pasándole la función receiveMessageUser como prop 'setMessageUser'.  Esto permite que ChatInput envíe el mensaje a este componente.
  */

  const [messageUser, setMessageUser] = useState("");

  const receiveMessageUser = (newMessageUser) => {
    setMessageUser(newMessageUser);
  };

  return (
    <Container $isOpen={isOpen}>
      <Header>
        <p>Trek IA</p>
        <span></span>
      </Header>
      <Messages>
        <ChatMessageUser messageUser={messageUser} />
      </Messages>
      <ChatInput setMessageUser={receiveMessageUser} />
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
    animation: scaleDotGreen 3s ease-in-out infinite;
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
`;
