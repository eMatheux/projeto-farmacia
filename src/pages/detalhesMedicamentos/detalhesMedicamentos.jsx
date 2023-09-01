import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { CadastroFarmaciaDiv } from "../cadastrarFarmacia/styled"
import { Sidebar } from "../../components/sidebar"
import { api } from "../../services/api"
import { DetalhesDiv } from "./styled"

function DetalhesMedicamentosPage() {

    const { id } = useParams()
    const [data, setData] = useState([]);
    useEffect(() => {
        const load = async () => {
          const response = await api.get(`/medicamentos/${id}`)
          setData(response.data)
          console.log(data)
        }
        load()
      }, [id])
    
    return(
        <>
        <CadastroFarmaciaDiv>
            <Sidebar/>
            <DetalhesDiv>
                <h2>Nome do medicamento: {data.nome}</h2>
                <label style={{margin: "0px"}} htmlFor="">Descrição: </label>
                <p>{data.descricao}</p>
                <p>Preço do medicamento: R${data.preço}</p>
                <p>Tipo do medicamento: {data.tipo}</p>
                <p>Laboratório responsável: {data.laboratorio}</p>
                <p>Dosagem recomendada do medicamento: {data.dosagem}</p>
            </DetalhesDiv>
        </CadastroFarmaciaDiv>
        </>
    )
}

export { DetalhesMedicamentosPage }