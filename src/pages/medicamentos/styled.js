import styled from "styled-components"
import { CardComponent } from "../../components/cardMedicamento/styled"


export const ListaBody = styled.div`
width: 100%;
display:flex;

`

export const ListaSemiDiv = styled.div `
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const ListaGeral = styled.div`
    display: grid;
    justify-content: center;
    grid-template-columns: 200px 200px 200px 200px;
    width: 100%;
    grid-column-gap: 150px;
    grid-row-gap: 1em;
`

