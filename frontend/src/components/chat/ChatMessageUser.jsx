import React, { useState } from "react";
import styled from "styled-components";

const ChatMessageUser = ({ message }) => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12;

  return (
    <Container>
      <Message>
        <Text>{message}</Text>
      </Message>
      <Time>
        {formattedHours}:{minutes.toString().padStart(2, "0")} {ampm}
      </Time>
    </Container>
  );
};

export default ChatMessageUser;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  gap: 0.5rem;
  font-family: "Inter", serif;
  font-size: 1rem;
  font-weight: 400;
  color: #f7f5fb;
  margin-bottom: 2rem;
`;

const Message = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-image: linear-gradient(to right, #8e2de2, #4a00e0);
  border-radius: 1rem 0 1rem 1rem;
`;

const Text = styled.span``;

const Time = styled.span`
  font-size: 0.8rem;
  font-weight: 500;
  color: #9ca3af;
  opacity: 0.8;
`;
