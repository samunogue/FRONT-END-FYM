import { useNavigate } from 'react-router-dom';
import './style.css';
import { useState } from 'react';
import { Post } from '../../Config/requisitions';
import { endpoints } from '../../Config/config';
const logo = require('../../Assets/LOGO_FYM_FUNDO_ESCURO.png')

export const CadastroPage = () =>{
    const [load, setLoad] = useState(false)
    const [tipo, setTipo] = useState(null)
    const [repetirSenha, setRepetirSenha] = useState(null)
    const [forms,setForms] = useState({
        nomeCompleto: null,
        CPF: null,
        email: null,
        senha: null,
        telefone: null,
        endereco:{
            cep:null,
            logradouro: null,
            bairro:null,
            estado: null,
            cidade: null,
            numero: null
        }
    })
    const [alerta, setAlerta] = useState(null)
    const navigate = useNavigate()

    const cadastrar = async () =>{
        console.log(forms)
            if(tipo == null) return
            setLoad(true)
            var url = tipo == "musico" ? endpoints.cadastrarMusico : endpoints.cadastrarContratante
            console.log("teste")
            const cadastrar = await Post(url , forms)
            console.log(cadastrar)
            if(cadastrar.error == false){
                console.log(cadastrar.user)
                //navigate(`/home`,{ state: { user:cadastrar.user }}) 
                return
            }
            setAlerta(cadastrar.message)
            setLoad(false)
            setTimeout(()=>{
                setAlerta(null)
            },2000)
        }
        
    return(
        <main className='page-cadastro'>
            <div className="box-cadastro">
                <h2 className='titulo-secttion-forms-cadastro'>Dados Pessoais</h2>
                <div className='forms-cadastro'>
                    <input type={'text'} value={forms.nomeCompleto} className="input-cadastro" placeholder="Nome Completo" onChange={(event) => setForms({...forms,nomeCompleto:event.target.value})} />
                    <input type={'text'} value={forms.email} className="input-cadastro" placeholder="Email" onChange={(event) => setForms({...forms,email:event.target.value})} />
                    <input type={'text'} value={forms.telefone} className="input-cadastro" placeholder="Telefone" onChange={(event) => setForms({...forms,telefone:event.target.value})}/>
                    <input type={'text'} value={forms.CPF} className="input-cadastro" placeholder="CPF" onChange={(event) => setForms({...forms,CPF:event.target.value})}/>
                    <input type={'password'} value={forms.senha} className="input-cadastro" placeholder="Senha" onChange={(event) => setForms({...forms,senha:event.target.value})} />
                    <input type={'password'} value={repetirSenha} className="input-cadastro" placeholder="Repetir Senha" />
                    <p>Você se identifica como?</p>
                    <select name="cars" id="cars" onChange={(event)=> setTipo(event.target.value)}>
                        <option value="null">Selecione</option>
                        <option value="contratante" >Contratante</option>
                        <option value="musico">Músico</option>
                    </select>
                </div>
                <h2 className='titulo-secttion-forms-cadastro'>Endereço</h2>
                <div className='forms-cadastro'>
                    <input type={'text'} value={forms.endereco.cep} className="input-cadastro" placeholder="CEP" onChange={(event) => setForms({...forms,endereco:{...forms.endereco,cep: event.target.value}})}/>
                    <input type={'text'} value={forms.endereco.logradouro} className="input-cadastro" placeholder="Logradouro" onChange={(event) => setForms({...forms,endereco:{...forms.endereco, logradouro: event.target.value}})}/>
                    <input type={'text'} value={forms.endereco.numero} className="input-cadastro" placeholder="Número" onChange={(event) => setForms({...forms,endereco:{...forms.endereco,numero: event.target.value}})}/>
                    <input type={'text'} value={forms.endereco.bairro} className="input-cadastro" placeholder="Bairro" onChange={(event) => setForms({...forms,endereco:{...forms.endereco,bairro: event.target.value}})}/>
                    <input type={'text'} value={forms.endereco.estado} className="input-cadastro" placeholder="Estado" onChange={(event) => setForms({...forms,endereco:{...forms.endereco,estado: event.target.value}})}/>
                    <input type={'text'} value={forms.endereco.cidade} className="input-cadastro" placeholder="Cidade" onChange={(event) => setForms({...forms,endereco:{...forms.endereco,cidade: event.target.value}})}/>
                </div>
                <button className="botao-login" onClick={cadastrar}>Cadastrar</button>
            </div>
        </main>
    )
}