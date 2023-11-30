import { faBell, faCreditCard, faKey, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { PerfilSectionConfig } from './components/perfil';
import { PagamentosSectionConfig } from './components/pagamentos';
import { useLocation, useNavigate } from "react-router-dom"
import { MenuLateral } from '../../Components/menu/menu';
import './style.css';

export const ConfiguracoesSection = () =>{
    const [view, setView] = useState('Perfil')
    const {state} = useLocation()
    const [user, setUser] = useState(state.user)
    const renderMenu = (params) =>{
        switch (params) {
            case 'Perfil':
                return <PerfilSectionConfig userJson={user} />
            case 'Pagamentos':
                return <PagamentosSectionConfig user={user} />
            default:
                break;
        }
    }
    const definirMenu = (menu) =>{
        setView(menu)
    }
    return(
        <>
        <MenuLateral user={user} />
        <main className="page-configuracoes">
            <div className='box-menu-lateral-configuracoes'>
                <h1 className='titulo-section-configuracoes'>Configurações</h1>
                <button className='button-menu-configuracoes' onClick={() => definirMenu('Perfil')}>
                    <FontAwesomeIcon icon={faUser} color="#804DEC" />
                    <p className='texto-button-menu-lateral-config'>Perfil</p>
                </button>
            </div>
            {renderMenu(view)}
        </main> 
    </>
    )
}