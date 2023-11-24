import { MenuLateral } from '../../Components/menu/menu';
import { useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom"
import './style.css';
export const ContratosSection = () =>{
    const {state} = useLocation()
    const [user, setUser] = useState(state.user)
    return(
        <>
        <MenuLateral user={user} />
        <main className="page-contratos">
            <h1 className="titulo-page-contratos">Meus Contratos</h1>
            <section className='section-box-contratos'>
            {user.contratos.length > 0 &&(
                user.contratos.map(item =>
                <div className='box-contrato-contratos'>
                    <p className='codigo-contrato-contratos'>{item.codigo}</p>
                    <p className='status-contrato-contratos'>Status: {item.status}</p>
                    <div className='box-nome-contrato-contratos'>
                        <p className='legenda-nome-contratos'>Músico</p>
                        <p className='nome-box-contrato-contratos'>{item.musico.nome}</p>
                    </div>
                    <div className='box-nome-contrato-contratos'>
                        <p className='legenda-nome-contratos'>Contratante</p>
                        <p className='nome-box-contrato-contratos'>{item.contratante.nome}</p>
                    </div>
                    <button className='button-box-contrato-contratos'>
                        Ver Contrato
                    </button>
                </div>    
                )
            )}
            </section>
        </main> 
        </>
    )
}