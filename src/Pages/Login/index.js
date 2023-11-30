import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import './style.css'
import { Link, useLocation, useNavigate, useParams } from "react-router-dom"
import { Post } from "../../Config/requisitions"
import { endpoints } from "../../Config/config"
const logo = require('../../Assets/LOGO_FYM_FUNDO_ESCURO.png')
const iconeGoogle = require('../../Assets/google.png')

export const LoginPage = () =>{
    const [load, setLoad] = useState(false)
    const [email,setEmail] = useState(null)
    const [senha,setSenha] = useState(null)
    const [alerta, setAlerta] = useState(null)
    const {state} = useLocation()
    const navigate = useNavigate()
    useEffect(()=>{
        loginGoogle()
    },[])
    const login = async () =>{
        setLoad(true)
        const url = state.tipo == 'contratante' ? endpoints.loginContratante : endpoints.loginMusico
        const body = {
            "login":`${email}`,
            "senha":`${senha}`
        }
        const autenticar = await Post(url, body)
        console.log(autenticar)
        if(autenticar.error == false){
            navigate(`/home`,{ state: { user:autenticar.user } }) 
            return
        }
        setAlerta(autenticar.message)
        setLoad(false)
        setTimeout(()=>{
            setAlerta(null)
        },2000)
    }

    function loginGoogle(){
        window.google.accounts.id.initialize({
          client_id: '566014604548-5vkvouvobbqqc5r49ns81eu6qna8na9d.apps.googleusercontent.com',
          callback: (e) => console.log(e)
        });
      
        window.google.accounts.id.renderButton(
          document.getElementById("buttonDiv"), {
          theme: "filled_black",
          size: "large",
          type: "standard",
          shape: "pill",
          locale: "pt-BR",
          logo_alignment: "left",
        } 
        );
      
        window.google.accounts.id.prompt()
    }
    return(
        <main className="page-login">
            <img src={logo} className="logo-fym-login" />
            <div className="box-login">
                <input type={'text'} className="input" placeholder="Email" onChange={(event) => setEmail(event.target.value)}/>
                <input type={'password'} className="input" placeholder="Senha"  onChange={(event) => setSenha(event.target.value)}/>
                <a className="link-esqueci-senha" onClick={() => navigate(`/redefinirSenha`,{ state: { tipo:state.tipo } }) }>esqueci minha senha</a>
                <button className="botao-login" onClick={login}>
                    {load == true 
                    ?
                    <p>Logando...</p>
                    :
                    <p>Login</p>}
                </button>
                {alerta != null &&(
                    <p className="alerta-login">{alerta}</p>
                )}
                <div className="linha-box-login"></div>
                <p className="texto-login">Faça login com</p>
                <div id="buttonDiv">

                </div>
                <Link to={'/cadastro'} className="link">Ainda não possui conta? Faça seu cadastro</Link>
            </div>
        </main>
    )
}