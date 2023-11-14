import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import './style.css'

const logo = require('../../Assets/LOGO_FYM_FUNDO_ESCURO.png')
const iconeGoogle = require('../../Assets/google.png')

export const LoginPage = () =>{
    return(
        <main className="page-login">
            <img src={logo} height='300' />
            <div className="box-login">
                <input type={'text'} className="input" placeholder="Email" />
                <input type={'password'} className="input" placeholder="Senha"/>
                <a className="link">esqueci minha senha</a>
                <button className="botao-login">Login</button>
                <div className="linha-box-login"></div>
                <p className="texto-login">Faça login com</p>
                <img src={iconeGoogle} height='30'  />
                <a className="link">Ainda não possui conta? Faça seu cadastro</a>
            </div>
        </main>
    )
}