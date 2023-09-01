import styled from "styled-components"

export const CadastroFarmaciaDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
`
export const CadastroFarmaciaDivForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-left: 10px;
`

export const CadastroFarmaciaDivFormLeft = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: 1px solid black;
    padding-right: 50px;
    gap: 5px;
`

export const CadastroFarmaciaDivFormRight = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    margin-top: -35px;
    padding-left: 50px;
`

export const CadastroForm = styled.div`
display: flex;
    width: 100%;
    gap: 0px;
    margin: 70px 0px 0px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const CadastroFormDivGeral = styled.div`
    display: flex;
`


export const CadastroFarmaciaInput = styled.input`

    width: 500px;
    padding: 8px;
    border-radius: 10px;
    border: 1px solid gray;

    &:focus-visible{
        outline: none;
    }

    &:placeholder{
        color: #000000be;
    }

`
