import { faComments, faFileInvoice, faGears, faHouse, faRightFromBracket, faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useLocation, useNavigate } from "react-router-dom"
import './style.css'
export const MenuLateral = ({user}) =>{
    const navigate = useNavigate()
    const definirMenu = (menu) =>{
        navigate(`/${menu}`,{ state: { user: user } })
    }
    const logout = () =>{
        navigate('/')
    }
    return(
        <section className="box-menu-lateral">
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
    )
}