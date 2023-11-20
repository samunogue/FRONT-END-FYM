import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import './style.css'
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { Post } from "../../Config/requisitions"
import { endpoints } from "../../Config/config"
const logo = require('../../Assets/LOGO_FYM_FUNDO_ESCURO.png')
const iconeGoogle = require('../../Assets/google.png')

export const RedefinirSenhaPage = () =>{
    const [load, setLoad] = useState(false)
    const [email,setEmail] = useState(null)
    const [cpf,setCPf] = useState(null)
    const [senha,setSenha] = useState(null)
    const [confirmarSenha,setConfirmarSenha] = useState(null)
    const [alerta, setAlerta] = useState(null)
    const {state} = useLocation()
    const navigate = useNavigate()

    const redefinir = async () =>{
        if(cpf || senha || confirmarSenha || email) return
        if(senha != confirmarSenha){
            setAlerta("As senhas são diferentes")
            setLoad(false)
            setTimeout(()=>{
                setAlerta(null)
            },2000)
            return
        }
        setLoad(true)
        const url = state.tipo == 'contratante' ? endpoints.redefinirSenhaContratante : endpoints.redefinirSenhaMusico
        const body = {
            "cpf":cpf,
            "email":email,
            "senha":confirmarSenha
        }
        console.log(url)
        const redefinir = await Post(url, body)
        console.log(redefinir)
        if(redefinir.error == false){
            setLoad(false)
            navigate(`/login`,{ state: { tipo:state.tipo } }) 
            return
        }
        setAlerta(redefinir.message)
        setLoad(false)
        setTimeout(()=>{
            setAlerta(null)
        },2000)
    }
    
    return(
        <main className="page-redefinir-senha">
            <img src={logo} height='300' />
            <div className="box-forms-redefinir">
                <input type={'text'} className="input-redefinir" placeholder="Email" onChange={(event) => setEmail(event.target.value)}/>
                <input type={'text'} className="input-redefinir" placeholder="CPF"  onChange={(event) => setCPf(event.target.value)}/>
                <input type={'password'} className="input-redefinir" placeholder="Senha"  onChange={(event) => setSenha(event.target.value)}/>
                <input type={'password'} className="input-redefinir" placeholder="Confirmar Senha"  onChange={(event) => setConfirmarSenha(event.target.value)}/>
                <button className="botao-forms-redefinir" onClick={redefinir}>
                    {load == true 
                    ?
                    <p>carregando...</p>
                    :
                    <p>Redefinir</p>}
                </button>
                {alerta != null &&(
                    <p className="alerta-redefinir">{alerta}</p>
                )}
            </div>
        </main>
    )
}