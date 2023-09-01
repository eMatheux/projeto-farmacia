import { Route, Routes } from "react-router-dom";
import {Login} from "../pages/login/loginFarmarcia"
import { NotPageFound } from "../pages/error404";
function PublicRoutes() {
    return (
       <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="*" element={<NotPageFound/>} />

       </Routes>
    )
}

export {PublicRoutes }