import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom"
import { MenuLateral } from '../../Components/menu/menu';
import './style.css';
import { endpoints } from '../../Config/config';
import { Get } from '../../Config/requisitions';

export const FavoritosSection = () =>{
    const [load, setLoad] = useState(false)
    const [alerta, setAlerta] = useState(null)
    const {state} = useLocation()
    const [user, setUser] = useState(state.user)
    useEffect(()=>{
        const buscar = async () =>{
            await buscarUser(state.user)
        }
        buscar()
    },[])
    const buscarUser = async (user) =>{
        setAlerta(null)
        setLoad(true)
        var tipo = null
        const params = {}
        if(user.hasOwnProperty('descricao')){
            params.id = user._id
            tipo = 'musico'
        }else{
            params.id = user._id
            tipo = 'contratante'
        }
        var url = tipo == 'musico' ? endpoints.listarMusicos : endpoints.buscarContratante
        const userJson = await Get(url, params)
        console.log(userJson)
        if(userJson == undefined || userJson == false){
            setLoad(false)
            setAlerta("Usuário não encontrado");
            return
        }
        setUser(userJson)
        setLoad(false)
    }

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