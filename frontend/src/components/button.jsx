import React from "react";
import styled from "styled-components";

const Button = () => {
  return (
    <StyledWrapper>
      <button className="menu__button">
        <span>¡Descubrilo!</span>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  button {
    border: none;
    background: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
  }

  .menu__button {
    min-width: 3.5rem;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 1rem;
    border: 1px solid #f7f5fb;
    background-color: transparent;
    position: relative;
  }

  .menu__button::before {
    content: "";
    width: 100%;
    height: 0;
    background-color: #f7f5fb;
    position: absolute;
    bottom: 0;
    left: 0;
    transition: all 0.3s ease-in-out;
  }

  .menu__button:hover::before {
    height: 100%;
    top: 0;
  }

  .menu__button span {
    color: #f7f5fb;
    line-height: 1;
    transition: color 0.3s ease-in-out;
  }

  .menu__button:hover span {
    color: black;
    z-index: 1;
  }
`;

export default Button;
