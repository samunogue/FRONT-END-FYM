import { faBell, faCreditCard, faKey, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { PerfilSectionConfig } from './components/perfil';
import { SegurancaSectionConfig } from './components/seguranca';
import { NotificacoesSectionConfig } from './components/notificacoes';
import { PagamentosSectionConfig } from './components/pagamentos';
import './style.css';

export const ConfiguracoesSection = () =>{
    const [view, setView] = useState('Perfil')
    const renderMenu = (params) =>{
        switch (params) {
            case 'Perfil':
                return <PerfilSectionConfig />
            case 'Seguranca':
                return <SegurancaSectionConfig />
            case 'Pagamentos':
                return <PagamentosSectionConfig />
            case 'Notificacoes':
                return <NotificacoesSectionConfig />
            default:
                break;
        }
    }
    const definirMenu = (menu) =>{
        setView(menu)
    }
    return(
        <main className="page-configuracoes">
            <div className='box-menu-configuracoes'>
                <h1 className='titulo-section-configuracoes'>Configurações</h1>
                <button className='button-menu-configuracoes' onClick={() => definirMenu('Perfil')}>
                    <FontAwesomeIcon icon={faUser} color="#804DEC" />
                    Perfil
                </button>
                <button className='button-menu-configuracoes' onClick={() => definirMenu('Pagamentos')}>
                    <FontAwesomeIcon icon={faCreditCard} color="#804DEC" />
                    Pagamentos
                </button>
                <button className='button-menu-configuracoes' onClick={() => definirMenu('Seguranca')}>
                    <FontAwesomeIcon icon={faKey} color="#804DEC" />
                    Segurança
                </button>
                <button className='button-menu-configuracoes' onClick={() => definirMenu('Notificacoes')}>
                    <FontAwesomeIcon icon={faBell} color="#804DEC" />
                    Notificações
                </button>
            </div>
            {renderMenu(view)}
        </main> 
    )
}