import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { MenuLateral } from "../../Components/menu/menu"
import { ChatSection } from "../Chat"
import { ConfiguracoesSection } from "../Configuracoes"
import { ContratosSection } from "../Contratos"
import { FavoritosSection } from "../Favoritos"
import { Load } from '../../Components/Load/load.js'
import './style.css'

export const Home = () =>{
    const [view,setView] = useState('Home')
    const [load, setLoad] = useState(false)
    const renderMenu = (pagina) =>{
        switch (pagina) {
            case 'Chat':
                return <ChatSection />
            case 'Contratos':
                return <ContratosSection />
            case 'Favoritos':
                return <FavoritosSection />
            case 'Configuracoes':
                return <ConfiguracoesSection />
            default:
                break;
        }
    }
    return(
        <>
        <MenuLateral setMenu={setView} />
        {renderMenu(view)}
        {view == 'Home' &&(
            <main className="page-home">
                        {load == true ?
                            <Load tema={'escuro'}/>
                        :
                        <div className="box-input">
                            <input className="input-home"></input>
                            <button className="button-input-pesquisa">
                                <FontAwesomeIcon icon={faMagnifyingGlass} color='white'  />
                            </button>
                        </div>
                        }
            </main> 
        )}
        </>
    )
}