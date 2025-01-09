import React, { useState } from "react";
import styled from "styled-components";
import { IoIosSend } from "react-icons/io";

const ChatInput = ({ setMessagesUser }) => {
  const [textUser, setTextUser] = useState("");

  const catchTextUser = (e) => {
    setTextUser(e.target.value);
  };

  const dispatchTextUser = () => {
    if (textUser.trim() !== "") {
      setMessagesUser(textUser);
      setTextUser("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      dispatchTextUser();
    }
  };

  return (
    <Container>
      <Input
        type="text"
        placeholder="Preguntale a Trek IA ..."
        value={textUser}
        onChange={catchTextUser}
        onKeyDown={handleKeyDown}
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
