import { Route, Routes } from "react-router-dom";
import { CadastroFarmaciaPage } from "../pages/cadastrarFarmacia/cadastrarFarmacia"
import { DetalhesMedicamentosPage } from "../pages/detalhesMedicamentos/detalhesMedicamentos"
import { ListagemMedicamentoPage } from "../pages/medicamentos/listagemMedicamentos";
import { CadastroMedicamentoPage } from "../pages/cadastroMedicamentos/cadastrarMedicamento";
import { MapaPage } from "../pages/mapa/mapPage";
import { NotPageFound } from "../pages/error404";
import { PerguntasFrequentes } from "../pages/faq/PerguntasFrequentes";
function PrivateRoutes() {
    return (
        <Routes>
            <Route path="/cadastrarfarmacia" element={<CadastroFarmaciaPage/>} />
            <Route path="/cadastrarmedicamento" element={<CadastroMedicamentoPage/>} />
            <Route path="/detalhes/:id" element={<DetalhesMedicamentosPage/>} />
            <Route path="/lista" element={<ListagemMedicamentoPage/>} />
            <Route path="/faq" element={<PerguntasFrequentes/>} />
            <Route path="/" element={<MapaPage/>} /> 
            <Route path="/mapa" element={<MapaPage/>} /> 
            <Route path="*" element={<NotPageFound/>} />

        </Routes>
    )
}
export {PrivateRoutes}