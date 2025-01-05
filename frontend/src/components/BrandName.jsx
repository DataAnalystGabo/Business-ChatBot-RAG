import styled from "styled-components";

const BrandName = ({ fontSizeH3, spanColor, fontOpacity, fontSizeP, displayRD, fontSizeH3RD, flexWrapRD, spaceBetweenWords }) => {
  return (
    <BrandNameContainer
      fontSizeH3={fontSizeH3}
      spanColor={spanColor}
      fontOpacity={fontOpacity}
      fontSizeP={fontSizeP}
      displayRD={displayRD}
      fontSizeH3RD={fontSizeH3RD}
      flexWrapRD={flexWrapRD}
      spaceBetweenWords={spaceBetweenWords}
    >
      <h3>
        Aventura
        <span>
          Trek<p>&reg;</p>
        </span>
      </h3>
    </BrandNameContainer>
  );
};

export default BrandName;

const BrandNameContainer = styled.div`
  h3 {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family: "Montserrat Subrayada", serif;
    font-size: ${({ fontSizeH3 }) => fontSizeH3 || "1rem"};
    opacity: ${({ fontOpacity }) => fontOpacity || "1"};
    user-select: none;
    margin: 0;

    span {
      display: flex;
      flex-direction: row;
      color: ${({ spanColor }) => spanColor || "black"};

      &::before {
        content: ""; // Contenido vacío para crear el espacio
        display: inline-block;
        width: ${({ spaceBetweenWords }) => spaceBetweenWords || "0.6rem"};
        height: 100%;
        text-decoration: none;
      }

      p {
        font-family: "Inter", serif;
        font-size: ${({ fontSizeP }) => fontSizeP || "0.5rem"};
        font-weight: 200;
        padding-left: 0.5rem;
        margin: 0;
      }
    }

    /* Responsive design */
    @media (max-width: 768px) {
      display: ${({ displayRD }) => displayRD || "block"};
      flex-wrap: ${({ flexWrapRD }) => flexWrapRD || "nowrap"};
      font-size: ${({ fontSizeH3RD}) => fontSizeH3RD || "1rem"};
    }
  }
`;