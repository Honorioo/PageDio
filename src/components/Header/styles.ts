import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    max-width: 80%;
    height: 47px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;

`

export const Row = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const Column = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Wrapper = styled.div`
    background-color: #151515;
    width: 100%;
    height: 47px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const BucarInputContainer = styled.div`
    width: 175px;
    height: 30px;
    background-color: #2D2D37;
    border-radius: 8px;
    padding: 2px 5px;
    margin: 0 12px;
`

export const Menu = styled.a`
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-style: normal;
    font-size: 12px;
    line-height: 25px;
    color: #FFFFFF;
    margin-right: 12px;
    text-decoration: none;
`
export const MenuRight = styled.a`
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-style: normal;
    font-size: 12px;
    line-height: 25px;
    color: #FFFFFF;
    margin-right: 12px;
    text-decoration: none;
`

export const UserPicture = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 22px;
    border: 2px solid #FFFFFF;
`

export const Input = styled.input`
    background: transparent;
    flex: 1;
    border: 0;
    color: #FFFFFF;
`

export const Logo = styled.img`
    height: 30px;
`