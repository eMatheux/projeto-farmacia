import styled from "styled-components"

export const LoginBody = styled.body`
    margin: 0;
`


export const LoginPage = styled.div`
width: 100%;
height: 900px;
display:flex;
flex-direction: column;
justify-content: center;
align-items:center;
text-align: center;
`

export const LoginForm = styled.form`

display: flex;
flex-direction: column;
gap: 10px;
margin-right: 20px;
margin-top: 5px;
justify-content: center;
align-items:center;

`

export const LoginLabel = styled.label`

    margin-bottom: 20px;
`


export const LoginInput = styled.input`
    border: 2px solid black;
    border-radius: 10px;
    padding: 5px;
    width: 270px;
    height: 20px;
`

export const LoginButtonInput = styled.input`
    &   {
    background-color: #009e2a;
    color: white;
    padding: 5px;
    width: 100px;
    margin-top: 10px;
    font-size: 16px;   
    }

    &:hover {
        background-color: black;
        transition: 0.4s;
    }
    
`