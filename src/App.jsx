import {NotPageFound} from "./pages/error404/index"
import { BrowserRouter } from "react-router-dom"
import { AppProvider } from "./context"
import { RoutesApp } from "./routes"
import { Login } from "./pages/login/loginFarmarcia"
import './global.css';
import { CadastroFarmaciaPage } from "./pages/cadastrarFarmacia/cadastrarFarmacia"
import { CadastroMedicamentoPage } from "./pages/cadastroMedicamentos/cadastrarMedicamento"
import { MapaPage } from "./pages/mapa/mapPage"

function App() {

  return (
    <BrowserRouter> 
    <AppProvider>
      <RoutesApp/>
    </AppProvider>
    </BrowserRouter>
  )
}

export default App
