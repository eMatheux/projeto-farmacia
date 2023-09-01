import styled from "styled-components"


export const CadastrarFormDiv = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 25px;

`

export const TextArea = styled.textarea`

    border: 1px solid gray;
    width: 100%;

    &:focus-visible{
        outline: none;
    }
`

export const ButtonForm = styled.input`
background-color: #009e2a;
color: white;
width: 200px;
padding: 10px;
margin-top: 25px;
font-size: 16px;

border: none;
border-radius: 10px;

&:hover{
    background-color: black;
    transition: 0.8s all;
}

`


