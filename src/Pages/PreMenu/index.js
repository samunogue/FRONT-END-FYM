import './style.css';
import { useNavigate } from 'react-router-dom';
const musicoIcon = require('../../Assets/musico.png')
const contratanteIcon = require('../../Assets/contratante.png')

export const MenuLogin = () =>{
    const navigate = useNavigate();
    const navegar = (tipo) =>{
        navigate(`/login`,{ state: { tipo:tipo } }) 
    } 
    return(
        <section className='section-menu-login'>
            <div className='box-menu-login' onClick={() => navegar('contratante')}>
                <img src={contratanteIcon} className={'icone-box-menu'} />
                <h1 className='titulo-box-menu-login'>Contratante</h1>
            </div>
            <div className='box-menu-login' onClick={() => navegar('musico')}>
                <img src={musicoIcon} className={'icone-box-menu'} />
                <h1 className='titulo-box-menu-login'>Músico</h1>
            </div>
        </section>
    )
}