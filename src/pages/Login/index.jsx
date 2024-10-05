import { useNavigate } from "react-router-dom";

import {MdEmail, MdLock} from 'react-icons/md'

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import {
  Container,
  Title,
  Column,
  CriarText,
  EsqueciText,
  Row,
  SubTitleLogin,
  TitleLogin,
  Wrapper,
} from "./styles";

const Login = () => {
  const navigate = useNavigate();

  const handleClickSingIn = () =>{
    navigate('/feed')
  }


  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubTitleLogin>Faça seu mogin e make the change</SubTitleLogin>
            <form action="">
              <Input placeholder="E-mail" leftIcon={<MdEmail />} />
              <Input placeholder="Senha" type="password" leftIcon={<MdLock />}/>
              <Button title="Entrar" variant="secondary" onClick={handleClickSingIn} type="button"/>           
            </form>
            <Row>
              <EsqueciText>Esqueci minha senha</EsqueciText>
              <CriarText>Criar conta</CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { Login };
