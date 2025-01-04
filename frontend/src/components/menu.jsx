import { useState } from "react";
import styled from "styled-components";
import { CgMenuGridO } from "react-icons/cg";

const Menu = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <Nav>
      <h3>
        Aventura
        <span>
          Trek<p>&reg;</p>
        </span>
      </h3>
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

export default Menu;

const Nav = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-self: flex-end;

  h3 {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family: "Montserrat Subrayada", serif;
    font-size: 1.6rem;
    opacity: 0.8;
    user-select: none;

    span {
      display: flex;
      flex-direction: row;
      color: #f7f5fb;

      &::before {
        content: ""; // Contenido vacío para crear el espacio
        display: inline-block;
        width: 0.6rem;
        height: 100%;
        text-decoration: none;
      }

      p {
        font-family: "Inter", serif;
        font-size: 1rem;
        font-weight: 200;
        color: #f7f5fb;
        padding-left: 0.5rem;
        margin: 0;
      }
    }

    /* Media queries para responsive design */
    @media (max-width: 768px) {
      display: none;
    }
  }

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
