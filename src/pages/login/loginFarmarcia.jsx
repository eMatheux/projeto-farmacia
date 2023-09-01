import logo from "../../assets/pharmacy.png"
import { LoginButtonInput, LoginInput, LoginPage } from "./styled"
import { LoginForm } from "./styled"
import { Header } from "../../components/header"
import { useForm } from "react-hook-form"
import { useApp } from "../../localStorage/useApp"


function Login() {

    const { register, handleSubmit } = useForm()
    const { setValue } = useApp();
    const onSubmit = (dataFromForm) => {
        setValue(dataFromForm)
    }
    
    return(
        <>
        <Header/>
        <LoginPage>
            <img src={logo} width="100" alt="Logo Geral" />
            <h1 style={{margin: 0}}>Faça seu login</h1>
            <LoginForm onSubmit={handleSubmit(onSubmit)} >
                <label htmlFor="">Email</label>
                <LoginInput {...register("email")} type="email" id="email" />
                <label htmlFor="">Senha</label>
                <LoginInput {...register("password")} type="password" id="email" />
                <LoginButtonInput type="submit" value="Logar" />
            </LoginForm>
        </LoginPage>
        </>
    )
}

export {Login}