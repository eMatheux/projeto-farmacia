
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';
import logo from "../../assets/pharmacy.png"


function Header () {
    return (
        <div style={{backgroundColor: "#009e2a"}}>
                <img src={logo} width="50px" alt="" />
        </div>
    )
}


export {Header}