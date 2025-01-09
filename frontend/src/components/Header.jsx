import { useState } from "react";
import styled from "styled-components";
import BrandName from "@components/BrandName";
import { CgMenuGridO } from "react-icons/cg";

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <Nav>
      <BrandName
        fontSizeH3="1.6rem"
        spanColor="#f7f5fb"
        fontOpacity="0.8"
        fontSizeP="1rem"
        displayRd="none"
      />
      <CgMenuGridO className="icon__menu" onClick={toggleMenu} />
      <ul className={menuVisible ? "visible" : ""}>
        <li>
          <a href="/">HOME</a>
        </li>
        <li>
          <a href="/#">PAQUETES</a>
        </li>
        <li>
          <a href="/#">RESEÑAS</a>
        </li>
        <li>
          <a href="/#">NOSOTROS</a>
        </li>
        <li>
          <a href="/#">CONTACTO</a>
        </li>
      </ul>
    </Nav>
  );
};

const Nav = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-self: flex-end;

  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    position: relative;
    padding: 0 1rem;
  }

  a {
    color: #f7f5fb;
    text-decoration: none;
    font-family: "Inter", serif;
    font-weight: 300;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: #ec7505;
    }

    &::after {
      content: "";
      position: absolute;
      bottom: -10px; /* Ajusta la posición de la línea */
      left: 0;
      width: 0; /* Inicialmente la línea tiene ancho 0 */
      height: 2px; /* Altura de la línea */
      background-color: #ec7505; /* Color naranja */
      transition: width 0.3s ease-in-out; /* Transición suave del ancho */
    }

    &:hover::after {
      width: 100%;
    }
  }

  .icon__menu {
    display: none;
    cursor: pointer;

    /* Responsive design */
    @media (max-width: 768px) {
      align-self: flex-end;
    }
  }

  /* Responsive design */
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-self: center;

    ul {
      max-height: 0;
      flex-direction: column;
      gap: 2rem;
      overflow: hidden;
      transition: max-height 0.3s ease-in-out;
    }

    ul.visible {
      display: flex;
      max-height: 16rem;
    }

    .icon__menu {
      font-size: 2.5rem;
      display: block;
      justify-self: end;
      transition: all 0.3s ease-in-out;
    }

    .icon__menu:hover {
      transform: scale(0.7);
    }
  }
`;

export default Header;
