import { NotFoundStyled } from "./styled"
import logo from "../../assets/pharmacy.png"

function NotPageFound() {
    return (
        <NotFoundStyled>
        <img src={logo} width="200" alt="Não Achamos" />
        <h1>Página a seguir não foi encontrada</h1>
        </NotFoundStyled>
    )
}

export { NotPageFound }