import { useForm } from "react-hook-form"
import { Sidebar } from "../../components/sidebar"
import { ButtonForm } from "../cadastroMedicamentos/styled"
import axios from "axios"
import { CadastroFarmaciaDiv, CadastroFarmaciaDivForm, CadastroFarmaciaDivFormLeft, CadastroFarmaciaDivFormRight, CadastroFarmaciaInput, CadastroForm, CadastroFormDivGeral } from "./styled"
import { useApp } from "../../localStorage/useApp"

function CadastroFarmaciaPage() {

    const {register, handleSubmit, setValue, setFocus} = useForm();

    const onSubmit = (e) => {
        console.log(e)
    }

    const completeAdress = (e) => {
        const cep = e.target.value.replace(/\D/g, '')
        console.log(cep)
       fetch(`https://viacep.com.br/ws/${cep}/json/`).then(result => result.json()).then(
        data => {
            setValue('endereco', data.logradouro)
            setValue('bairro', data.bairro)
            setValue('estado', data.uf)
            setValue('cidade', data.localidade)
            setFocus('numero')
        }
       )
    }

    const style = {
        margin: "50px 0 0 0"
    }

    return(
            <>
            <CadastroFarmaciaDiv>
                <Sidebar/>
                <CadastroFarmaciaDivForm>
                    <h2 style={{margin: "0px"}}>Cadastrar nova farmácia</h2>
                    <p style={{margin: "0px"}}>Preencha os campos com os dados corretos para registrar uma nova farmácia</p>
                    <form style={style} onSubmit={handleSubmit(onSubmit)} action="">
                        <CadastroFormDivGeral>
                        <CadastroFarmaciaDivFormLeft>
                        <h3>Informações básicas</h3>
                        <label htmlFor="">Razão Social</label>
                        <CadastroFarmaciaInput {...register("razaosocial")} type="text" name="" id="" placeholder="Digite a razão social" onChange={e => {
                            setValue("razaosocial", e.target.value)
                        }} required/>
                        <label htmlFor="">CNPJ</label>
                        <CadastroFarmaciaInput {...register("cnpj")} type="text" name="" id="" placeholder="Digite o CNPJ da empresa" required/>
                        <label htmlFor="">Nome Fantasia</label>
                        <CadastroFarmaciaInput {...register("nomefantasia")} type="text" name="" id="" placeholder="Digite o nome fantasia" required />
                        <label htmlFor="">Email</label>
                        <CadastroFarmaciaInput {...register("email")} type="email" name="" id="" placeholder="Digite o e-mail" required/>
                        <label htmlFor="">Telefone</label>
                        <CadastroFarmaciaInput {...register("telefone")} type="text" name="" id="" placeholder="(xx) xxxx-xxxx" required/>
                        <label htmlFor="">Celular</label>
                        <CadastroFarmaciaInput {...register("celular")} type="text" name="" id="" placeholder="(xx) xxxx-xxxx" required/>
                        </CadastroFarmaciaDivFormLeft>
                        <CadastroFarmaciaDivFormRight>
                        <h3>Informações do estabelecimento</h3>
                        <label htmlFor="">CEP</label>
                        <CadastroFarmaciaInput onBlur={completeAdress} type="text" name="" id="" placeholder="Digite o CEP" required />
                        <label htmlFor="">Logradouro</label>
                        <CadastroFarmaciaInput {...register("endereco")} type="text" name="" id="logradouro" placeholder="Digite o endereço" required/>
                        <label htmlFor="">Número</label>
                        <CadastroFarmaciaInput type="text" name="" id="" placeholder="Digite o número do estabelecimento" {...register("numero")} required/>
                        <label htmlFor="">Bairro</label>
                        <CadastroFarmaciaInput  {...register("bairro")} type="text" name="" id="" placeholder="Digite o bairro" required/>
                        <label htmlFor="">Cidade</label>
                        <CadastroFarmaciaInput {...register("cidade")} type="text" name="" id="" placeholder="Digite a cidade" required/>
                        <label htmlFor="">Estado</label>
                        <CadastroFarmaciaInput {...register("estado")} type="text" name="" id="" placeholder="Digite o estado" required/>
                        <label htmlFor="">Complemento</label>
                        <CadastroFarmaciaInput {...register("complemento")}  type="text" name="" id="" placeholder="Digite o complemento" required/>
                        <label htmlFor="">Latitude</label>
                        <CadastroFarmaciaInput {...register("latitude")} type="text" name="" id="" placeholder="Digite a latitude" required/>
                        <label htmlFor="">Longitude</label>
                        <CadastroFarmaciaInput {...register("longitude")} type="text" name="" id="" placeholder="Digite a longitude" required/>
                        </CadastroFarmaciaDivFormRight>
                        </CadastroFormDivGeral>
                        <ButtonForm type="submit" value="Salvar" />
                    </form>
                </CadastroFarmaciaDivForm>
            </CadastroFarmaciaDiv>
            </>
    )
}

export {CadastroFarmaciaPage}