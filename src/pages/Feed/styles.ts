import styled from "styled-components";
import { IColumn } from "./types";

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const Title = styled.h3`
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;    font-style: normal;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #FFFFFF;

    margin-bottom: 24px;
`

export const TitleHighlight = styled.h3`
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;    font-style: normal;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #FFFFFF70;

    margin-bottom: 24px;
`

export const TextContent = styled.p`
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;

    width: 420px;
    margin-bottom: 20px;
    line-height: 22px;
    
    color: #FFFFFF;
`

export const Column = styled.div<IColumn>`
    flex:${({flex}) => flex};
    padding-right: 24px;
`