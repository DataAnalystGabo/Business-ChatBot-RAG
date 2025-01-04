import styled from "styled-components";
import Button from "./button";

const Feature = ({ icon, text }) => {
  return (
    <FeatureContainer>
      <IconWrapper>{icon}</IconWrapper>
      <p>{text}</p>
      <Button />
    </FeatureContainer>
  );
};

export default Feature;

const FeatureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 22rem;
  font-family: "Inter", serif;
  font-optical-sizing: auto;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 200;
  line-height: 1.3;
  text-align: left;
  gap: 1rem;

  /* Responsive design */
  @media (max-width: 768px) {
    width: 100%;
    height: max-content;
    gap: 1rem;
  }

  p {
    padding: 0;
    margin: 0;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  *align-items: center;
  svg {
    color: #f7f5fb;
    font-size: 5rem;
    opacity: 0.8;
  }
`;
