import { faBars, faComments, faFileInvoice, faGears, faHouse, faL, faRightFromBracket, faStar, faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useLocation, useNavigate } from "react-router-dom"
import './style.css'
import { useState } from "react"
export const MenuLateral = ({user}) =>{
    const navigate = useNavigate()
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };
    const definirMenu = (menu) =>{
        setMenuVisible(false)
        navigate(`/${menu}`,{ state: { user: user } })
    }
    const logout = () =>{
        navigate('/')
    }
    return(
        <>
        <section className={`box-menu-lateral ${menuVisible ? "visible" : ""}`}>
            <p className="nome-menu-lateral">Olá, {user.nomeCompleto.slice(0,user.nomeCompleto.indexOf(" "))}</p>
            <div className="section-generos-menu-lateral">
            {user.generos.map(item =>
                    <p className="box-genero-menu-lateral" key={item}>{item}</p>
            )}
            </div>
            <button className="button-menu-lateral" onClick={()=> definirMenu('home')}>
                <p>Home</p>
                <FontAwesomeIcon icon={faHouse} />
            </button>
            <button className="button-menu-lateral" onClick={()=> definirMenu('chat')}>
                <p>Chat</p>
                <FontAwesomeIcon icon={faComments} />
            </button>
            <button className="button-menu-lateral" onClick={()=> definirMenu('favoritos')}>
                <p>Favoritos</p>
                <FontAwesomeIcon icon={faStar} />
            </button>
            <button className="button-menu-lateral" onClick={()=> definirMenu('contratos')}>
                <p>Contratos</p>
                <FontAwesomeIcon icon={faFileInvoice} />
            </button>
            <button className="button-menu-lateral" onClick={()=> definirMenu('configuracoes')}>
                <p>Configurações</p>
                <FontAwesomeIcon icon={faGears} />
            </button>
            <button className="button-menu-lateral" onClick={logout}>
                <p>Sair</p>
                <FontAwesomeIcon icon={faRightFromBracket} />
            </button>
        </section>
                <button className={`button-acesso-menu-lateral ${menuVisible ? "button-acesso-menu-lateral-fechar" : ""}`} onClick={toggleMenu}>
                    {menuVisible == true 
                    ?
                    <>
                    <p>Fechar</p>
                    <FontAwesomeIcon icon={faX} />
                    </>
                    :
                    <>
                    <p>Menu</p>
                    <FontAwesomeIcon icon={faBars} />
                    </>
                    }
                </button>
        </>
    )
}