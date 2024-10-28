import styled from "styled-components";

export const InputContainer = styled.div`
    max-width: 275px;
    width: 100%;
    height: 30px;
    border-bottom: 1px solid #3B3450;

    display: flex;
    align-items: center;
    margin-bottom: 10px;
`

export const IconCotainer = styled.div`
    margin-right: 10px;
`

export const InputText = styled.input`
    background-color: transparent;
    color: #FFFFFF;
    width: 100%;
    border: 0;
    height: 30px;
`
export const ErrorText = styled.p`
    color: #FF0000;
    font-size: 12px;
    margin: 10px 0;
`