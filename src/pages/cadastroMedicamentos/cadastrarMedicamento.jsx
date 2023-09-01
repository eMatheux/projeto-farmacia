import { Sidebar } from "../../components/sidebar"
import { CadastroFarmaciaDiv, CadastroFarmaciaDivForm, CadastroFarmaciaInput } from "../cadastrarFarmacia/styled"
import { ButtonForm, CadastrarFormDiv, TextArea } from "./styled"

function CadastroMedicamentoPage() {
    return(
        <>
        <CadastroFarmaciaDiv>
            <Sidebar/>
            <CadastroFarmaciaDivForm>
                <h2 style={{margin: "0px"}}>Cadastrar medicamento</h2>
                <p style={{margin: "0px"}}>Preencha todos os campos com os dados corretos para cadastrar um novo medicamento</p>
                <CadastrarFormDiv>
                    <label htmlFor="">Medicamento</label>
                    <CadastroFarmaciaInput type="text" name="" id="medicamento" placeholder="Digite o nome do medicamento" required/>
                    <label htmlFor="">Laboratorio</label>
                    <CadastroFarmaciaInput type="text" name="" id="laboratorio" placeholder="Digite o nome do laboratorio" required/>
                    <label htmlFor="">Dosagem</label>
                    <CadastroFarmaciaInput type="text" name="" id="dosagem" placeholder="Digite a dosagem" required/>
                    <label htmlFor="">Tipo</label>
                    <CadastroFarmaciaInput type="text" name="" id="tipo" placeholder="Digite o tipo do medicamento" required/>
                    <label htmlFor="">Preço unitário</label>
                    <CadastroFarmaciaInput type="number" name="" id="valor" placeholder="Digite o preço unitário" required/>
                    <label htmlFor="">Descrição</label>
                    <TextArea name="descricao" id="descricao" cols="30" rows="10" placeholder="Digite a descrição do medicamento"></TextArea>
                    <ButtonForm type="button" value="Salvar" />
                </CadastrarFormDiv>
            </CadastroFarmaciaDivForm>
           
        </CadastroFarmaciaDiv>
        </>
    )
}

export {CadastroMedicamentoPage}