import { Post } from '../../Config/requisitions';
import { endpoints } from '../../Config/config';
import './style.css'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
export const ModalMusico = ({item, setModalMusico, user,setModalContrato, setViewModalMusico}) =>{
    const [favoritado, setFavoritado] = useState(false)
    const navigate = useNavigate() 

    useEffect(()=>{
        var favorito = false
        user.favoritos.forEach(element => {
            if(element.id == item._id) favorito = true
        })
        setFavoritado(favorito)
    },[])


    const contratar = () =>{
        setViewModalMusico(false)
        setModalContrato(true)
    }
    const favoritar = async () =>{
        var tipo = user.hasOwnProperty('descricao') ? 'musico' : 'contratante'
        var url = tipo == 'musico' ? endpoints.favoritarMusicoMusico : endpoints.favoritarMusicoContratante
        var body = ''
        if(tipo == 'musico'){
            body = {
                "idMusico": user._id,
                "idMusicoFavoritado": item._id   
            }
        }else if(tipo == 'contratante'){
            body = {
                "idMusico": item._id,
                "idContratante":user._id
            }
        }
        console.log(body)
        var adicionar = await Post(url, body)
    }
    const desfavoritar = async () =>{
        var tipo = user.hasOwnProperty('descricao') ? 'musico' : 'contratante'
        var url = tipo == 'musico' ? endpoints.desfavoritarMusicoMusico : endpoints.desfavoritarMusicoContratante
        var body = ''
        if(tipo == 'musico'){
            body = {
                "idMusico": user._id,
                "idMusicoFavoritado": item._id   
            }
        }else if(tipo == 'contratante'){
            body = {
                "idMusico": item._id,
                "idContratante":user._id
            }
        }
        console.log(body)
        var desfavoritar = await Post(url, body)
        console.log(desfavoritar)
        //setUserModal(desfavoritar.user)
        //verificarFavoritos(desfavoritar.user)
    }
    const filtrarFuncao = async () =>{
        if(favoritado == true){
            setFavoritado(false)
            await desfavoritar()
        }else if(favoritado == false){
            setFavoritado(true)
            await favoritar()
        }
    }
    const criarConversa = async () =>{
        const body = {
            "idUserRemetente": user._id,
            "tipoRemetente": user.hasOwnProperty('descricao') ? 'musico' : 'contratante',
            "idUserDestinatario": item._id,
            "tipoDestinatario": item.hasOwnProperty('descricao') ? 'musico' : 'contratante'
        }
        const adicionarConversa = await Post(endpoints.criarConversa, body)
        navigate(`/chat`,{ state: { user: user } }) 
    }
    return(
        <section className="section-modal-musico">
            <div className="box-modal-musico">
                <p className="nome-modal-musico">{item.nomeCompleto}</p>
                <p className="descricao-modal-musico">{item.descricao}</p>
                <h2 className="titulo-habilidades-modal-musico">Habilidades</h2>
                <div className="box-habilidades-modal-musico">
                    {item.generos.map(genero =>
                    <p className='genero-modal-musico'>{genero}</p>    
                    )}
                </div>
                <h2 className="titulo-habilidades-modal-musico">Avaliações</h2>
                <div className="box-habilidades-modal-musico">
                    {item.avaliacoes.length > 0 &&(
                        item.avaliacoes.map(avaliacao =>
                            <div className='genero-modal-musico'>
                                <p className='avaliacao-mensagem-modal-musico'>{avaliacao.mensagem}</p>
                                <p className='avaliacao-nome-modal-musico'>- {avaliacao.nome}</p>  
                            </div>  
                        )
                    )}
                </div>
                    <div className='box-botoes-modal-musico'>
                        <button className='button-fechar-modal-musico' onClick={() =>{ setModalMusico(null);setViewModalMusico(false)}}>Fechar</button>
                        {user.hasOwnProperty('descricao') == false &&(
                            <>
                            <button className='button-chat-modal-musico' onClick={criarConversa}>Chat</button>
                            <button className='button-contratar-modal-musico' onClick={contratar}>Contratar</button>
                            <button className='button-favoritar-modal-musico' onClick={() => filtrarFuncao()}>{favoritado == true ? "Remover dos Favoritos": "Favoritar"}</button>
                            </>
                        )}
                    </div>
                </div>
        </section>
    )
}