import styled from "styled-components";

const Menu = () => {
  return (
    <Nav>
      <ul>
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
  width: max-content;
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
    color: white;
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
      width: 100%; /* Al pasar el mouse, la línea ocupa todo el ancho */
    }
  }

  /* Media queries para responsive design */
`;
