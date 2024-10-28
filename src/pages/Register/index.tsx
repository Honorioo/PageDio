import React from "react";

import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { IFormDataReg } from './types'

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { MdEmail, MdLock, MdPerson } from "react-icons/md";

import {
  Text,
  Container,
  Column,
  Wrapper,
  SubTitle,
  TextRegister,
  Row,
  CriarLogin,
  Login,
} from "./styles";

import { api } from "../../services/api";

const schema = yup
  .object({
    name: yup
      .string()
      .min(3, "No minimo 3 letras")
      .required("Campo Obrigatorio"),
    email: yup
      .string()
      .email("Email não é valido")
      .required("Campo Obrigatorio"),
    password: yup
      .string()
      .min(3, "No minimo 3 caracteres")
      .required("Campo Obrigatorio"),
  })
  .required();

const Register = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async (formData : IFormDataReg) => {
    try {
      const { data } = await api.post(
        'http://localhost:8001/users',
      {
        id: formData.id,
        name: formData.name,
        email: formData.email,
        senha: formData.password,
      });
      if (data) {
        navigate("/feed");
      } else {
        alert("Email ou Senha inválido");
      }
    } catch {
      alert("Houve um erro, tente novamente");
    }
  };

  const HandleClickLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Text>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Text>
        </Column>
        <Column>
          <Wrapper>
            <TextRegister>Comece agora grátis</TextRegister>
            <SubTitle>Crie sua conta e make the change.</SubTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                name="name"
                errorMessage={errors.name ? errors.name.message : ""}
                control={control}
                placeholder="Nome Completo"
                leftIcon={<MdPerson />}
              />
              <Input
                name="email"
                errorMessage={errors.password ? errors.password.message : ""}
                control={control}
                placeholder="E-mail"
                leftIcon={<MdEmail />}
              />
              <Input
                name="password"
                errorMessage={errors.password ? errors.password.message : ""}
                control={control}
                placeholder="Senha"
                type="password"
                leftIcon={<MdLock />}
              />
              <Button title="Registrar" variant="secondary" type="submit" />
              <SubTitle>
                Ao clicar em "criar minha conta grátis", declaro que aceito as
                Políticas de Privacidade e os Termos de Uso da DIO.
              </SubTitle>
            </form>
            <Row>
              <CriarLogin>
                Já tenho conta.{" "}
                <Login onClick={HandleClickLogin}>Fazer login</Login>
              </CriarLogin>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { Register };
