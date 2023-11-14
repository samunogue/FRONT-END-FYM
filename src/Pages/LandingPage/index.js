import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import './style.css';
const logo = require('../../Assets/LOGO_FYM_FUNDO_ESCURO.png')
const iconeBanner = require('../../Assets/icone-banner.png')
const icone1 = require('../../Assets/icone-1.png')
const icone2 = require('../../Assets/icone-2.png')
const icone3 = require('../../Assets/icone-3.png')
export const LandingPage = () =>{
    return(
        <main className="page-landing">
            <nav className="header">
                <img src={logo} height='100' />
                <button className="button-header">
                    Login
                </button>
            </nav>
            <section className="banner">
                <div className="box-texto-banner">
                    <p className="texto-banner">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis orci vel ornare sodales.</p>
                    <button className="button-banner">
                        <p className="texto-button">Saiba Mais</p>
                        <div className="box-seta-button">
                            <FontAwesomeIcon icon={faArrowRight} color='white' />
                        </div>
                    </button>
                </div>
                <img src={iconeBanner} height='380' />
            </section>
            <section className="section-home">
                <div className="box-texto">
                    <h1 className="titulo-section">Find your Music</h1>
                    <div className="linha"></div>
                    <p className="texto-section">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis orci vel ornare sodales.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis orci vel ornare sodales.</p>
                    <button className="botao-section">
                        <p className="texto-section">Saiba Mais</p>
                    </button>
                </div>
                <img src={logo} />
            </section>
            <section className="section-cards">
                <div className="card">
                    <img src={icone1} height="200" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis orci vel ornare sodales.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis orci vel ornare sodales.</p>
                </div>
                <div className="card">
                    <img src={icone2} height="200" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis orci vel ornare sodales.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis orci vel ornare sodales.</p>
                </div>
                <div className="card">
                    <img src={icone3} height="200"/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis orci vel ornare sodales.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis orci vel ornare sodales.</p>
                </div>
            </section>
            <section className="section-home">
                <img />
                <div>
                    <h2>Faça parte da nossa história</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis orci vel ornare sodales.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis orci vel ornare sodales.</p>
                    <button>Cadastrar</button>
                </div>
            </section>
        </main>
    )
}