import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import { MenuLateral } from "../../Components/menu/menu"
import { ChatSection } from "../Chat"
import { ConfiguracoesSection } from "../Configuracoes"
import { ContratosSection } from "../Contratos"
import { FavoritosSection } from "../Favoritos"
import { Load } from '../../Components/Load/load.js'
import './style.css'
import { Get } from "../../Config/requisitions"
import { endpoints } from "../../Config/config"

export const Home = () =>{
    const [view,setView] = useState('Home')
    const [load, setLoad] = useState(false)
    const [alerta, setAlerta] = useState(null)
    const [musicos, setMusicos] = useState(null)
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

    useEffect(()=>{
        const buscar = async () =>{
            await buscarMusicos()
        }
        buscar()
    },[])
    const buscarMusicos = async () =>{
        setLoad(true)
        const musicos = await Get(endpoints.listarMusicos)
        console.log(musicos)
        if(musicos == undefined || musicos == false){
            setAlerta(true);
            return
        }
        setMusicos(musicos)
        setLoad(false)
    }

    return(
        <>
        <MenuLateral setMenu={setView} />
        {renderMenu(view)}
        {view == 'Home' &&(
            <main className="page-home">
                        <div className="box-input">
                            <input className="input-home"></input>
                            <button className="button-input-pesquisa">
                                <FontAwesomeIcon icon={faMagnifyingGlass} color='white'  />
                            </button>
                        </div>
                        {load == true &&(
                            <div className="box-load">
                                <Load tema={'escuro'}/>
                            </div>
                        )}
                        {alerta != null &&(
                            <div className="box-load">
                                <Load tema={'escuro'}/>
                            </div>
                        )}
                        {alerta == null && load == false && musicos != null &&(
                            <section className="section-cards-home">
                                <h1 className="titulo-section-home">Melhores Avaliações</h1>
                                <div className="box-cards-home">
                                {musicos.map(item =>
                                    <div key={item._id}>
                                        <h1>{item.nomeCompleto}</h1>
                                        <h2>{item.descricao}</h2>
                                        {item.generos.map(genero =>
                                            <div key={genero}>{genero}</div>
                                        )}
                                        <p>NOTA</p>
                                        <button>
                                            Contratar
                                        </button>
                                    </div>    
                                    )}
                                </div>
                            </section>
                        )}
            </main> 
        )}
        </>
    )
}