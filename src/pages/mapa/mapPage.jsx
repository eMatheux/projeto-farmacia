import { MapaFarmacias } from "../../components/map/mapaFarmacias"
import { Sidebar } from "../../components/sidebar"
import { CadastroFarmaciaDiv, CadastroFarmaciaDivForm } from "../cadastrarFarmacia/styled"

function MapaPage () {
    return (
        <>
            <CadastroFarmaciaDiv>
                <Sidebar/>
                <CadastroFarmaciaDivForm>
                    <h2>Bem vindo a plataforma de gerencimento da farmácia</h2>
                    <p> Aqui você pode cadastrar farmácias e medicamentos como gerenciar cada um também!</p>
                    <MapaFarmacias/>
                </CadastroFarmaciaDivForm>
            </CadastroFarmaciaDiv>
        </>
    )
}

export { MapaPage }