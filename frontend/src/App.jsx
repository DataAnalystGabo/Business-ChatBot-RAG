import styled from "styled-components";
import Menu from "./components/menu";

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
                        Vive la aventura de tu vida con{" "}
                        <strong>Aventura Trek</strong>. Explora paisajes
                        impresionantes, descubre culturas fascinantes y crea
                        recuerdos que durarán para siempre.
                    </PageDescription>
                </LogoContainer>
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
  height: 100%;
  margin: 0 auto;
  padding: 2rem 0;
  width: 70%;
`;

const LogoContainer = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 15rem auto 0;
  width: max-content; 
`;

const PageTitle = styled.h1`
  display: flex;
  font-family: "Montserrat Subrayada", serif;
  font-size: 5rem;
  font-style: normal;
  font-weight: 700;
  user-select: none;
  margin: 0;

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
      padding-left: .5rem;
      margin: 0;
    }
  }
`;

const PageDescription = styled.p`
  font-family: "Inter", serif;
  font-optical-sizing: auto;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 200; 
  letter-spacing: 0.1rem;
  line-height: 1.3;
  margin: 0;
  width: 30rem;
`;
