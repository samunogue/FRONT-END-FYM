import './style.css';
const logo = require('../../Assets/LOGO_FYM_FUNDO_ESCURO.png')

export const CadastroPage = () =>{
    return(
        <main className='page-cadastro'>
            <img src={logo} height='300' />
            <div className="box-login">
                <input type={'text'} className="input" placeholder="Email" />
                <input type={'text'} className="input" placeholder="Telefone"/>
                <input type={'text'} className="input" placeholder="CPF" />
                <input type={'date'} className="input" placeholder="Data de Nascimento"/>
                <input type={'password'} className="input" placeholder="Senha" />
                <input type={'password'} className="input" placeholder="Repetir Senha"/>
                <button className="botao-login">Cadastrar</button>
            </div>
        </main>
    )
}