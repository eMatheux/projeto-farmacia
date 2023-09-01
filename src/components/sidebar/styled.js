import styled from "styled-components"

export const SideBarDiv = styled.div`
    background-color: #009e2a;
    max-width: 270px;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    flex-direction: column;
`

export const SideBarUl = styled.ul`
    list-style-type: none;
    margin: 0;
    padding-left: 0;
    padding: 50px 20px 50px 20px;
`

export const SideBarA = styled.a`
    color: white;
    text-decoration: none;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const SideBarLi = styled.li`
    margin-bottom: 50px;
    display: flex;
    width: 100%;

    &:hover {
        background-color: #01dc3b;
        transition: 0.5s;
    }
`


export const SideBarSpan = styled.span`
    padding-left:5px;
`
