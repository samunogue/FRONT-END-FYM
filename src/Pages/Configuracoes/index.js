import { faBell, faCreditCard, faKey, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { PerfilSectionConfig } from './components/perfil';
import { SegurancaSectionConfig } from './components/seguranca';
import { NotificacoesSectionConfig } from './components/notificacoes';
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
                return <PerfilSectionConfig user={user} />
            case 'Seguranca':
                return <SegurancaSectionConfig user={user} />
            case 'Pagamentos':
                return <PagamentosSectionConfig user={user} />
            case 'Notificacoes':
                return <NotificacoesSectionConfig user={user} />
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
                <button className='button-menu-configuracoes' onClick={() => definirMenu('Pagamentos')}>
                    <FontAwesomeIcon icon={faCreditCard} color="#804DEC" />
                    <p className='texto-button-menu-lateral-config'>Pagamentos</p>
                </button>
                <button className='button-menu-configuracoes' onClick={() => definirMenu('Seguranca')}>
                    <FontAwesomeIcon icon={faKey} color="#804DEC" />
                    <p className='texto-button-menu-lateral-config'>Segurança</p>
                </button>
                <button className='button-menu-configuracoes' onClick={() => definirMenu('Notificacoes')}>
                    <FontAwesomeIcon icon={faBell} color="#804DEC" />
                    <p className='texto-button-menu-lateral-config'>Notificações</p>
                </button>
            </div>
            {renderMenu(view)}
        </main> 
    </>
    )
}