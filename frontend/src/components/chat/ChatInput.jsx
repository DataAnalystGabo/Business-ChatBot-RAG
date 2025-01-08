import React, { useState } from "react";
import styled from "styled-components";
import { IoIosSend } from "react-icons/io";

const ChatInput = ({ setMessageUser }) => {
  /*
  Componente que maneja la entrada de texto del usuario y el envío del mensaje al componente padre.

  Lógica:
  1. Se declaran las variables y la función de actualización (textUser, setTextUser).
  2. catchTextUser: se encarga de capturar el evento onChange y setear la variable textUser.
  3. dispatchTextUser: 
    - Se ejecuta al hacer clic en el botón de enviar.
    - Verifica que el mensaje no se encuentre vacío.
    - Llama a la función setMessageUser (recibida como prop) que actualiza el estado 'messageUser' en el componente ChatWindow.jsx.
  4. dispatchTextUser limpia el input.
*/
  const [textUser, setTextUser] = useState("");

  const catchTextUser = (e) => {
    setTextUser(e.target.value);
  };

  const dispatchTextUser = () => {
    if (textUser.trim() !== "") {
      setMessageUser(textUser);
      setTextUser("");
    }
  };

  return (
    <Container>
      <Input
        type="text"
        placeholder="Preguntale a Trek IA ..."
        value={textUser}
        onChange={catchTextUser}
      />
      <SendButton onClick={dispatchTextUser}>
        <IoIosSend />
      </SendButton>
    </Container>
  );
};

export default ChatInput;

const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: #141a28;
  border-top: 1px solid #222;
  padding: 1rem 2rem;
`;

const Input = styled.input`
  height: 3rem;
  flex-grow: 1;
  border: none;
  background-color: transparent;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  color: #f7f5fb;
  outline: none;

  &::placeholder {
    font-style: italic;
    color: #9ca3af;
    opacity: 0.8;
  }
`;

const SendButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  color: #f7f5fb;
  font-size: 1.5rem;

  svg {
    transition: transform 0.2s ease;
  }

  &:hover svg {
    transform: scale(1.2);
  }
`;
