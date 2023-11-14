import { faKey, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import './style.css';
export const SegurancaSectionConfig = () =>{
    return(
        <section className="section-seguranca">
            <div className="box-titulo-section-seguranca">
                <FontAwesomeIcon icon={faKey} color='white' />
                <h1 className="titulo-section-seguranca">Segurança</h1>
            </div>
        </section>
    )
}