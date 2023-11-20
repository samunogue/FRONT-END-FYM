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
import { Card } from "../../Components/Card/index.js"
import { useLocation, useNavigate } from "react-router-dom"

export const Home = () =>{
    const navigate = useNavigate()
    const [view,setView] = useState('Home')
    const [load, setLoad] = useState(false)
    const [alerta, setAlerta] = useState(null)
    const [musicos, setMusicos] = useState(null)
    const [pesquisa, setPesquisa] = useState(null)
    const [generoSelecionado, setGeneroSelecionado] = useState(null)

    const {state} = useLocation()
    const renderMenu = (pagina) =>{
        switch (pagina) {
            case 'Chat':
                return <ChatSection />
            case 'Contratos':
                return <ContratosSection />
            case 'Favoritos':
                return <FavoritosSection user={state.user} />
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
    },[pesquisa])
    const buscarMusicos = async () =>{
            if(pesquisa == '' || pesquisa == null){
                setAlerta(null)
                setLoad(true)
                const musicos = await Get(endpoints.listarMusicos)
                if(musicos == undefined || musicos == false){
                    setLoad(false)
                    setAlerta("Não foram encontrados músicos");
                    return
                }
                setMusicos(musicos)
                setLoad(false)
            }
    }
    const buscarMusicoPesquisa = async (tipo,input) =>{
        if(input == '' || input == null) return
        setLoad(true)
        setAlerta(null)
        var params = {}
        if(tipo == 'genero'){
            if(generoSelecionado == input){
                setGeneroSelecionado(null)
                await buscarMusicos()
                setLoad(false)
                return
            }
            params.genero = input
            setGeneroSelecionado(input)
            setPesquisa('')
        }else if(tipo == 'nome'){
            setGeneroSelecionado(null)
            params.nome = input
        }
        const musicos = await Get(endpoints.listarMusicos, params)
        if(musicos == undefined || musicos == false){
            setLoad(false)
            setAlerta("Não foram encontrados músicos");
            return
        }
        setMusicos(musicos)
        setLoad(false)
    }

    const logout = () =>{
        navigate(`/`) 
    }
    return(
        <>
        <MenuLateral setMenu={setView} user={state.user} logout={logout} />
        {renderMenu(view)}
        {view == 'Home' &&(
            <main className="page-home">
                        <div className="box-input">
                            <input className="input-home" value={pesquisa} onChange={(event) => setPesquisa(event.target.value)}></input>
                            <button className="button-input-pesquisa" onClick={() => buscarMusicoPesquisa('nome',pesquisa)}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} color='white'  />
                            </button>
                        </div>
                        <div className="box-generos-home">
                            <button className={generoSelecionado == "Rock" ? "button-genero-home-selecionado": "button-genero-home"} onClick={() => buscarMusicoPesquisa('genero',"Rock")}>Rock</button>
                            <button className={generoSelecionado == "Blues" ? "button-genero-home-selecionado": "button-genero-home"} onClick={() => buscarMusicoPesquisa('genero',"Blues")}>Blues</button>
                            <button className={generoSelecionado == "Pop" ? "button-genero-home-selecionado": "button-genero-home"} onClick={() => buscarMusicoPesquisa('genero',"Pop")}>Pop</button>
                        </div>
                        {load == true &&(
                            <div className="box-load">
                                <Load tema={'escuro'}/>
                            </div>
                        )}
                        {alerta != null &&(
                            <div className="box-alerta-home">
                                <p className="alerta-home">{alerta}</p>
                            </div>
                        )}
                        {alerta == null && load == false && musicos != null &&(
                            <section className="section-cards-home">
                                <h1 className="titulo-section-home">Músicos</h1>
                                <div className="box-cards-home">
                                    {musicos.map(item =>
                                    <Card artist={item} />
                                    )}
                                </div> 
                            </section> 
                        )}
            </main> 
        )}
        </>
    )
}