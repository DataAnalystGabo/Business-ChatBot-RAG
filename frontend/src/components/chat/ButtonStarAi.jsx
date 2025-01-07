import styled from "styled-components";
import { useState } from "react";
import StarIcon from "../../assets/icons/StarIcon";
import "../../styles/stars.css";

const ButtonStarAi = ({ openChat }) => {
  const [rotate, setRotate] = useState(false);

  const rotateButton = () => {
    setRotate(!rotate);
    openChat();
  };

  return (
    <ButtonContainer className="button-container" onClick={rotateButton}>
      <StarIcon
        width={50}
        height={50}
        className={`star-main ${rotate ? "rotate-open" : "rotate-close"}`}
      />
      <StarIcon width={20} height={20} className="star-satellite-1" />
      <StarIcon width={15} height={15} className="star-satellite-2" />
    </ButtonContainer>
  );
};

export default ButtonStarAi;

const ButtonContainer = styled.div`
  width: max-content;
  height: max-content;
  display: flex;
  position: absolute;
  bottom: 3rem;
  right: 0;
  cursor: pointer;

  @media (max-width: 768px) {
    position: fixed;
    right: 5vw;
    bottom: 5vh;
  }
`;
