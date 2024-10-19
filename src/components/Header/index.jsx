import React from "react";
import { Button } from "../Button";
import LogoDio from "../../assets/logo-dio.png";
import { useNavigate } from "react-router-dom";


import {
  Container,
  Row,
  Column,
  Wrapper,
  BucarInputContainer,
  Menu,
  MenuRight,
  UserPicture,
  Input,
  Logo,
} from "./styles";



const Header = ({ autenticado }) => {
  
  const navigate = useNavigate()

  const handleClickSingIn = () =>{
    navigate('/login')
  }

  const handleClickRegister = () =>{
    navigate('/register')
  }

  return (
    <>
      <Wrapper>
        <Container>
          <Row>
            <Logo src={LogoDio} alt="Logo da Dio" />
            {autenticado ? (
              <>
                <BucarInputContainer>
                  <Input placeholder="Buscar" />
                </BucarInputContainer>
                <Menu>Live Code</Menu>
                <Menu>Global</Menu>
              </>
            ) : null}
          </Row>
          <Row>
          {autenticado ? (
            <UserPicture src="https://avatars.githubusercontent.com/u/79340843?s=400&u=14551c2bfaf805aab5d19632e59a5ccca5847ce7&v=4"/>
          ) : (
            <>
              <MenuRight href="#">Home</MenuRight>
              <Button title="Entrar" onClick={handleClickSingIn} />
              <Button title="Cadastrar" onClick={handleClickRegister} />
            </>            
          )}

          </Row>
        </Container>
      </Wrapper>
    </>
  );
};

export { Header };
