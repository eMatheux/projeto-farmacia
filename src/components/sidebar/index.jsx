import HomeIcon from '@mui/icons-material/Home';
import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy';
import MedicationIcon from '@mui/icons-material/Medication';
import MapIcon from '@mui/icons-material/Map';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import { SideBarA, SideBarDiv, SideBarLi, SideBarSpan, SideBarUl } from "./styled";
import logo from "../../assets/pharmacy.png"
import { CadastroFarmaciaPage } from '../../pages/cadastrarFarmacia/cadastrarFarmacia';

function Sidebar() {

    return (
        <>
        <SideBarDiv>
        <img src={logo} width="90px" alt="" />
        <h2>Arcaya Farmacia</h2>
            <SideBarUl>
                <SideBarLi>
                    <SideBarA href="http://localhost:5173/">
                        <HomeIcon fontSize="large"/>
                        <SideBarSpan>Inicio</SideBarSpan>
                    </SideBarA>
                </SideBarLi>
                <SideBarLi>
                    
                    <SideBarA href="http://localhost:5173/cadastrarfarmacia">
                        <MapsHomeWorkIcon fontSize="large"/>
                        <SideBarSpan>Cadastrar Farmacia</SideBarSpan>
                    </SideBarA>
                </SideBarLi>
                <SideBarLi>
                    <SideBarA href="http://localhost:5173/cadastrarmedicamento">
                        <LocalPharmacyIcon fontSize="large"/>
                        <SideBarSpan>Cadastrar Medicamentos</SideBarSpan>
                    </SideBarA>
                </SideBarLi>
                <SideBarLi>
                    <SideBarA href="http://localhost:5173/lista">
                        <MedicationIcon fontSize="large"/>
                        <SideBarSpan>Lista de Medicamentos</SideBarSpan>
                    </SideBarA>
                </SideBarLi>
                <SideBarLi>
                    <SideBarA href="http://localhost:5173/mapa">
                        <MapIcon fontSize="large"/>
                        <SideBarSpan>Mapa</SideBarSpan>
                    </SideBarA>
                </SideBarLi>
                <SideBarLi>
                    <SideBarA href="http://localhost:5173/faq">
                        <LiveHelpIcon fontSize="large"/>
                        <SideBarSpan>FAQ</SideBarSpan>
                    </SideBarA>
                </SideBarLi>
            </SideBarUl>
        </SideBarDiv>
        </>
    )

}

export { Sidebar }