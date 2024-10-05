import React from 'react'

import { CardContainer, 
        ImageBackground,
        Content,
        HasInfo, 
        PostInfo, 
        UserInfo, 
        UserPicture } from "./styles"
import { FiThumbsUp } from 'react-icons/fi'

const Card = () => {
  return (
    <CardContainer>
        <ImageBackground src='https://hermes.dio.me/articles/cover/38a9f14d-704a-4885-bb3f-3d62dc1db4d7.png'/>
        <Content>
            <UserInfo>
                <UserPicture src='https://avatars.githubusercontent.com/u/79340843?s=400&u=14551c2bfaf805aab5d19632e59a5ccca5847ce7&v=4'/>
                <div>
                    <h4>Vinicius</h4>
                    <p>Há 5 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                    <h4>Projeto para curso de HTML e CSS</h4>
                    <p>Projeto feito o curso de gtml e css no bootcamp dio do Global avande... <strong>Saiba mais</strong></p>
                </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #JavaScript</h4>
                <p>
                    <FiThumbsUp /> 10
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}

export { Card }