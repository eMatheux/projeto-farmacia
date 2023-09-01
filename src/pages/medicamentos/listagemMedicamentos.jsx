import { useState, useEffect } from "react";
import { CardMedicamento } from "../../components/cardMedicamento/index";
import { Sidebar } from "../../components/sidebar";
import { api } from "../../services/api";
import { ListaBody, ListaGeral, ListaSemiDiv } from "./styled";

function ListagemMedicamentoPage() {

    const [data, setData] = useState([]);
    useEffect(() => {
        const load = async () => {
          const response = await api.get(`/medicamentos`)
          setData(response.data)
        }
        load()
      })
      
    return(
        <>
        <ListaBody>
        <Sidebar/>
        <ListaSemiDiv>
        <h2>Todos os medicamentos</h2>
        <ListaGeral>
        {
            data.length > 0 ? data.map(({nome, id}) => {
                return (
                    <CardMedicamento id={id} nome={nome}/>
                )
            })
            :
            <p>Não existem medicamentos registrados</p>
        }
        </ListaGeral>
        </ListaSemiDiv>
        
        
        </ListaBody>

        </>
    )
}

export { ListagemMedicamentoPage };