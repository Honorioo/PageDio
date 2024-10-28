import { useNavigate } from "react-router-dom";

import BannerImage from '../../assets/banner.svg'
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";

import {
  Container,
  Title,
  TitleHighlight,
  TextContent,
  Image
} from "./styles";

const Home = () => {

  const navigate = useNavigate();

  const handleClickSingIn = () =>{
    navigate('/login')
  }

  return (
    <>
      <Header />
      <Container>
        <div>
            <Title>
            <TitleHighlight>
                Implemente
                <br />
            </TitleHighlight>
            o seu futuro global agora!
            </Title>
            <TextContent>
                Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts
            </TextContent>
            <Button title="Começar agora" variant="Segundary" onClick={handleClickSingIn}/>
        </div>
        <div>
            <Image src={BannerImage} alt="Imagem Principal" />
        </div>
      </Container>
    </>
  );
};

export { Home };
