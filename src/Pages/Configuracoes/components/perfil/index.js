import { faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import './style.css';
export const PerfilSectionConfig = () =>{
    return(
        <section className="section-perfil">
            <div className="box-titulo-section-perfil">
                <FontAwesomeIcon icon={faUser} color='white' />
                <h1 className="titulo-section-perfil">Perfil</h1>
            </div>
        </section>
    )
}