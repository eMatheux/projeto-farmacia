import styled from "styled-components"

export const CardComponent = styled.div`
    background-color: #009e2a;
    display: flex;
    flex-direction: column;
    color: white;
    width: 300px;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    text-align:center;
    cursor: pointer;

`

export const CardButton = styled.button`

    background-color: white;
    padding: 10px 35px 10px 35px;
    border: none;
    border-radius: 20px;
    margin-bottom: 10px;
    font-size: 15px;
    cursor: pointer;

    &: hover{
        background-color: black;
        color: white;
        transition: 0.5s;
    }
`
