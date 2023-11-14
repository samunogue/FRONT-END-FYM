import { faComments, faFileInvoice, faGears, faHouse, faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import './style.css'
export const MenuLateral = ({user,setMenu}) =>{
    const definirMenu = (menu) =>{
        setMenu(menu)
    }
    return(
        <section className="box-menu-lateral">
            {/* 
            <p>{user.nome}</p>
            {user.generos.map(item =>
                <p>{item}</p>
            )}
            */}
            <button className="button-menu-lateral" onClick={()=> definirMenu('Home')}>
                <p>Home</p>
                <FontAwesomeIcon icon={faHouse} />
            </button>
            <button className="button-menu-lateral" onClick={()=> definirMenu('Chat')}>
                <p>Chat</p>
                <FontAwesomeIcon icon={faComments} />
            </button>
            <button className="button-menu-lateral" onClick={()=> definirMenu('Favoritos')}>
                <p>Favoritos</p>
                <FontAwesomeIcon icon={faStar} />
            </button>
            <button className="button-menu-lateral" onClick={()=> definirMenu('Contratos')}>
                <p>Contratos</p>
                <FontAwesomeIcon icon={faFileInvoice} />
            </button>
            <button className="button-menu-lateral" onClick={()=> definirMenu('Configuracoes')}>
                <p>Configurações</p>
                <FontAwesomeIcon icon={faGears} />
            </button>
        </section>
    )
}