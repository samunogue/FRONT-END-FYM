import { faBell, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import './style.css';
export const NotificacoesSectionConfig = () =>{
    return(
        <section className="section-notificacoes">
            <div className="box-titulo-section-notificacoes">
                <FontAwesomeIcon icon={faBell} color='white' />
                <h1 className="titulo-section-notificacoes">Notificações</h1>
            </div>
        </section>
    )
}