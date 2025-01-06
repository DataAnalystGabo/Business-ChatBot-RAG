import styled from "styled-components";
import StarIcon from "../../assets/icons/StarIcon";
import "../../styles/stars.css";

const ButtonStarAi = () => {
  return (
    <ButtonContainer className="button-container">
      <StarIcon width={50} height={50} className="star-main" />
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
  position: relative;
  bottom: -45vh;
  right: -65vw;
  cursor: pointer;
  *border: 1px solid white;

  @media (max-width: 768px) {
    position: fixed;
    right: 5vw;
    bottom: 5vh;
  }
`;
