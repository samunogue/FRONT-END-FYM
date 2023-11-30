import { Post } from '../../Config/requisitions';
import { endpoints } from '../../Config/config';
import './style.css'
import { useEffect, useState } from 'react';
export const ModalConversa = ({index, user, setConversas, setDestinatarios,destinatario,conversa, setIndex, setView,buscarConversas}) =>{
    const [novaMensagem, setNovaMensagem] = useState(null)
    const [destinatarioModal,setDestinatarioModal] = useState(destinatario)
    const [conversaModal, setConversaModal] = useState(conversa)
    const enviarMensagem = async () =>{
        if(novaMensagem == null || novaMensagem == '') return
        var url = endpoints.enviarMensagem
        const body = {   
        "idUserRemetente": user._id,
        "tipoRemetente": user.hasOwnProperty('descricao') == true ? 'musico' : 'contratante',
        "idUserDestinatario": destinatario._id,
        "tipoDestinatario": destinatario.hasOwnProperty('descricao') == true ? 'musico' : 'contratante',
        "mensagem": novaMensagem  
    }
        var enviar = await Post(url, body)
        setNovaMensagem('')
        var objeto = await buscarConversas()
        setConversaModal(objeto.conversas[index])
        setDestinatarioModal(objeto.destinatarios[index])
    }
    return(
        <section className="section-modal-conversa">
            <div className="box-modal-conversa">
                <p className='nome-destinatario-modal-conversa'>{destinatarioModal.nomeCompleto}</p>
                <button className='button-fechar-modal-conversa' onClick={() => {setIndex(null);setView(false)}}>x</button>
                <div className='box-mensagens-modal'>
                    {conversaModal.mensagens.map(item =>
                    item.user == user._id
                    ?
                    <p className='mensagem-remetente'>{item.texto}</p>
                    :    
                    <p className='mensagem-destinatario'>{item.texto}</p>
                    )}
                </div>
                <div className='box-input-modal-conversa'>
                    <input value={novaMensagem} placeholder='Digite aqui' onChange={(event) => setNovaMensagem(event.target.value)} className='input-modal-conversa' />
                    <button className='button-enviar-mensagem-modal' onClick={enviarMensagem}>
                        Enviar
                    </button>
                </div>
            </div>
        </section>
    )
}