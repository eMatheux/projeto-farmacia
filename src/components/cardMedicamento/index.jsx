import { CardButton, CardComponent } from "./styled"
import img from "../../assets/capsulas-semfundo.png"
import { useNavigate } from "react-router-dom"

function CardMedicamento(props) {
    const navigate = useNavigate();
    const navigateToDetails = () => {
        navigate(`/detalhes/${props.id}`)
    }
    return (
        <>
        <CardComponent>
            <img width="300px" src={img} alt="" />
            <h2 style={{margin: "0"}}>{props.nome}</h2>
            <p style={{margin: "10px"}}>Para ver mais detalhes clique no botão abaixo</p>
            <CardButton onClick={navigateToDetails} type="button">Ver detalhes</CardButton>
        </CardComponent>
        </>
    )

}

export { CardMedicamento }