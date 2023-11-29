import { faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import './style.css';
import { useState } from "react";
export const PerfilSectionConfig = ({user}) =>{
    const [edit,setEdit] = useState(false)
    return(
        <section className="section-perfil">
            <div className="box-titulo-section-perfil">
                <FontAwesomeIcon icon={faUser} color='white' />
                <h1 className="titulo-section-perfil">Perfil</h1>
            </div>
            <div className="main-config-perfil">
                <h2 className="label-input-config-perfil">Nome Completo</h2>
                <input className="input-config-perfil" readOnly={!edit} placeholder={user.nomeCompleto}></input>
                <h2 className="label-input-config-perfil">Email</h2>
                <input className="input-config-perfil" readOnly={!edit} placeholder={user.email}></input>
                <h2 className="label-input-config-perfil">CPF</h2>
                <input className="input-config-perfil" readOnly={true} placeholder={user.CPF}></input>
                <h2 className="label-input-config-perfil">Gêneros</h2>
                <div>
                    {user.generos.map(item =>
                    <p className='genero-config-perfil'>{item}</p>
                    )}
                </div>
                <div>
                    <input className="input-config-perfil"  placeholder="Gênero"></input>
                    <button className="button-adicionar-genero-config-perfil">Adicionar</button>
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
                    <button className="button-editar-config-perfil" onClick={() => setEdit(true)}>Editar</button>
                </div>
            </div>
        </section>
    )
}