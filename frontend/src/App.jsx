import styled from "styled-components";
import Menu from "./components/menu";
import Feature from "./components/feature";
import { FaHotel } from "react-icons/fa6";
import { MdWorkspacePremium } from "react-icons/md";
import { RiLandscapeAiFill } from "react-icons/ri";



function App() {
  return (
    <LandingPageContainer>
      <MainContent>
        <Menu />
        <LogoContainer>
          <PageTitle>
            Aventura{" "}
            <span>
              Trek<p>&reg;</p>
            </span>
          </PageTitle>
          <PageDescription>
            Vive la aventura de tu vida con <strong>Aventura Trek</strong>.
            Explora paisajes impresionantes, descubre culturas fascinantes y
            crea recuerdos que durarán para siempre.
          </PageDescription>
        </LogoContainer>
        <WrapperFeatures>
          <Feature icon={<FaHotel/>} text="Nuestros paquetes incluyen alojamiento, comidas y equipo de alta calidad para que disfrutes al máximo de la experiencia.  ¡Descubrí la magia!" />
          <Feature icon={<MdWorkspacePremium />} text="Nuestros guías certificados te brindarán la seguridad y la instrucción necesaria para que vivas una experiencia inolvidable.  ¡Preparate!" />
          <Feature icon={<RiLandscapeAiFill />} text="Organizamos viajes a comunidades indígenas en la Amazonía peruana, donde podrás compartir y aprender sobre sus tradiciones." />
        </WrapperFeatures>
      </MainContent>
    </LandingPageContainer>
  );
}

export default App;

const LandingPageContainer = styled.div`
  background-image: url("../public/image-background.svg");
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: 0 auto;
  width: 100%;
`;

const MainContent = styled.main`
  color: #f7f5fb;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  margin: 0 auto;
  padding: 2rem 0;
  width: 70%;

  /* Media queries para responsive design */
  @media (max-width: 768px) {
    width: 90%;
    padding: 1rem 0;
    gap: 6rem;
    overflow-y: auto;
    -ms-overflow-style: none; /* IE 11 */
    scrollbar-width: none; /* Firefox */

    ::-webkit-scrollbar {
      display: none; /* Chrome, Safari y Opera */
    }
  }
`;

const LogoContainer = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 46rem;

  /* Media queries para responsive design */
  @media (max-width: 768px) {
    width: 100%;
    gap: 0.5rem;
  }
`;

const PageTitle = styled.h1`
  display: flex;
  font-family: "Montserrat Subrayada", serif;
  font-size: 5rem;
  font-style: normal;
  font-weight: 700;
  user-select: none;
  margin: 0;

  /* Media queries para responsive design */
  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    font-size: 3rem;
  }

  span {
    display: flex;
    flex-direction: row;
    color: #ec7505;
    &::before {
      content: ""; // Contenido vacío para crear el espacio
      display: inline-block;
      width: 1.5rem;
      height: 100%;
      text-decoration: none;
    }
    p {
      font-family: "Inter", serif;
      font-size: 2.5rem;
      font-weight: 200;
      color: #f7f5fb;
      padding-left: 0.5rem;
      margin: 0;

      /* Media queries para responsive design */
      @media (max-width: 768px) {
        font-size: 1.5rem;
      }
    }
  }
`;

const PageDescription = styled.p`
  font-family: "Inter", serif;
  font-optical-sizing: auto;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 200;
  line-height: 1.3;
  margin: 0;
  width: 100%;

  /* Media queries para responsive design */
  @media (max-width: 768px) {
    width: 100%;
    font-size: 1.3rem;
  }
`;

const WrapperFeatures = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 5rem;

  /* Media queries para responsive design */
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 5rem;
    margin-bottom: 2rem;
  }
`;
