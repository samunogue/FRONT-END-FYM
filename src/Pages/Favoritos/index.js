import { useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom"
import { MenuLateral } from '../../Components/menu/menu';
import './style.css';

export const FavoritosSection = () =>{
    const {state} = useLocation()
    const [user, setUser] = useState(state.user)

    return(
        <>
        <MenuLateral user={user} />
        <main className="page-favoritos">
                <h1 className="titulo-page-favoritos">Meus Favoritos</h1>
                {user.favoritos.map(item =>
                <div className='card-musico-favoritos'>
                    <div className='box-titulo-card-favoritos'>
                        <h1 className='nome-card-favoritos'>{item.nomeCompleto}</h1>
                        <h2 className='nota-card-favoritos'>{item.nota} ⭐</h2>
                    </div>
                    <h3 className='descricao-card-favoritos'>{item.descricao}</h3>
                    <div className='box-generos-button-card-favoritos'>
                        <div className='box-generos-card-favoritos'>
                        {item.generos.map(genero =>
                            <p className='genero-card-favoritos'>{genero}</p>
                        )}
                        </div>
                        <button className='button-card-favoritos'>
                            Contratar
                        </button>
                    </div>
                </div>    
                )}
        </main> 
        </>
    )
}