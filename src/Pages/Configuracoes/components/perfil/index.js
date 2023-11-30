import { faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import './style.css';
import { useState } from "react";
import { endpoints } from "../../../../Config/config";
import { Post, Put } from "../../../../Config/requisitions";
export const PerfilSectionConfig = ({userJson}) =>{
    const [edit,setEdit] = useState(false)
    const [novoGenero, setNovoGenero] = useState('')
    const [user,setUser] = useState(userJson)

    const adicionarGenero = async () =>{
        if(novoGenero == '' || novoGenero == undefined) return
        var url = user.hasOwnProperty('descricao') ? endpoints.adicionarGeneroMusico : endpoints.adicionarGeneroContratante
        const body ={
        "cpf":user.CPF,
        "genero":novoGenero
        }
        var adicionar = await Post(url,body)    
        setNovoGenero('')   
        setUser(adicionar.user) 
    }
    const editarUser = async () =>{
        var url = user.hasOwnProperty('descricao') ? endpoints.editarMusico : endpoints.editarContratante
        const body = {
        "cpf":user.CPF,
        "genero":novoGenero
        }
        var adicionar = await Put(url,body)    
        setNovoGenero('')   
        setUser(adicionar.user) 
    }
    return(
        <section className="section-perfil">
            <div className="box-titulo-section-perfil">
                <FontAwesomeIcon icon={faUser} color='white' />
                <h1 className="titulo-section-perfil">Perfil</h1>
            </div>
            {user != null &&(
                <div className="main-config-perfil">
                <h2 className="label-input-config-perfil">Nome Completo</h2>
                <input className="input-config-perfil" readOnly={!edit} placeholder={user.nomeCompleto}></input>
                <h2 className="label-input-config-perfil">Email</h2>
                <input className="input-config-perfil" readOnly={!edit} placeholder={user.email}></input>
                <h2 className="label-input-config-perfil">CPF</h2>
                <input className="input-config-perfil" readOnly={true} placeholder={user.CPF}></input>
                <h2 className="label-input-config-perfil">Gêneros</h2>
                <div className="box-generos-config-perfil">
                    {user.generos.map(item =>
                    <p className='genero-config-perfil'>{item}</p>
                    )}
                </div>
                <div>
                    <input className="input-config-perfil" value={novoGenero} onChange={(event) => setNovoGenero(event.target.value)}  placeholder="Gênero"></input>
                    <button className="button-adicionar-genero-config-perfil" onClick={adicionarGenero}>Adicionar</button>
                </div>
                <h2 className="titulo-section-config-perfil">Endereço</h2>
                <h2 className="label-input-config-perfil">CEP</h2>
                <input className="input-config-perfil" readOnly={!edit} placeholder={user.endereco.CEP}></input>
                <h2 className="label-input-config-perfil">Logradouro</h2>
                <input className="input-config-perfil" readOnly={!edit} placeholder={user.endereco.logradouro}></input>
                <h2 className="label-input-config-perfil">Número</h2>
                <input className="input-config-perfil" readOnly={!edit} placeholder={user.endereco.numero}></input>
                <h2 className="label-input-config-perfil">Bairro</h2>
                <input className="input-config-perfil" readOnly={!edit} placeholder={user.endereco.bairro}></input>
                <h2 className="label-input-config-perfil">Estado</h2>
                <input className="input-config-perfil" readOnly={!edit} placeholder={user.endereco.estado}></input>
                <div>
                    {edit == false 
                    ?
                    <button className="button-editar-config-perfil" onClick={() => setEdit(true)}>Editar</button>
                    :
                    <>
                    <button className="button-cancelar-config-perfil" onClick={() => setEdit(false)}>Cancelar</button>
                    <button className="button-salvar-config-perfil" onClick={() => setEdit(false)}>Salvar</button>
                    </>
                    }
                </div>
            </div>
            )}
        </section>
    )
}