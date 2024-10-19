import styled, { css } from 'styled-components'


export const ButtonContainer = styled.button`
    background-color: #565656;
    color: #FFFFFF;
    border-radius: 22px;

    position: relative;

    padding: 2 12px;
    width: 100%;
    min-width: 120px;

    ${({variant})=> variant !== "primary" && css`
        min-width: 167px;
        height: 33px;
        margin-top: 20px;

        background-color: #E4105D;
        color: #FFFFFF;

        &:hover{
            opacity: 0.6;
            cursor: pointer ;
        }

        &::after{
            content: '';
            position: absolute;
            border: 1px solid #E4105D;
            top: -5px;
            left: -6px;
            width: calc(100% + 10px);
            height: calc(100% + 10px);
            border-radius: 22px;
        }
    `}
`