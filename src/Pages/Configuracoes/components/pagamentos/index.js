import { faCreditCard, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import './style.css';
export const PagamentosSectionConfig = () =>{
    return(
        <section className="section-pagamentos">
            <div className="box-titulo-section-pagamentos">
                <FontAwesomeIcon icon={faCreditCard} color='white' />
                <h1 className="titulo-section-pagamentos">Pagamentos</h1>
            </div>
        </section>
    )
}