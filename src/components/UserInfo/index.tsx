import React from "react";

import { Container, NameText, Progess, UserPicture } from "./styles";
import { IUserInfo } from "./types"

const UserInfo = ({ nome, image, percentual }: IUserInfo) => {
  return (
    <Container>
      <UserPicture src={image} />
      <div>
        <NameText>{nome}</NameText>
        <Progess percentual={percentual}/>
      </div>
    </Container>
  );
};

export { UserInfo };
