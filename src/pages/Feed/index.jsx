import { Link } from "react-router-dom";

import BannerImage from "../../assets/banner.png";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { UserInfo } from "../../components/UserInfo";

import {
  Container,
  Column,
  TextContent,
  Title,
  TitleHighlight,
} from "./styles";

const Feed = () => {
  return (
    <>
      <Header autenticado={true}/>
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
          <UserInfo
            percentual={80}
            nome="Vinicius Honorio"
            image="https://avatars.githubusercontent.com/u/79340843?s=400&u=14551c2bfaf805aab5d19632e59a5ccca5847ce7&v=4"
          />
          <UserInfo
            percentual={70}
            nome="Vinicius Honorio"
            image="https://avatars.githubusercontent.com/u/79340843?s=400&u=14551c2bfaf805aab5d19632e59a5ccca5847ce7&v=4"
          />
          <UserInfo
            percentual={50}
            nome="Vinicius Honorio"
            image="https://avatars.githubusercontent.com/u/79340843?s=400&u=14551c2bfaf805aab5d19632e59a5ccca5847ce7&v=4"
          />
          <UserInfo
            percentual={40}
            nome="Vinicius Honorio"
            image="https://avatars.githubusercontent.com/u/79340843?s=400&u=14551c2bfaf805aab5d19632e59a5ccca5847ce7&v=4"
          />
          <UserInfo
            percentual={30}
            nome="Vinicius Honorio"
            image="https://avatars.githubusercontent.com/u/79340843?s=400&u=14551c2bfaf805aab5d19632e59a5ccca5847ce7&v=4"
          />
        </Column>
      </Container>
    </>
  );
};

export { Feed };
