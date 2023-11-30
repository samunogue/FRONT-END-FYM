import { Post } from '../../Config/requisitions';
import { endpoints } from '../../Config/config';
import './style.css'
import { useEffect, useState } from 'react';
export const ModalConversa = ({user,destinatario,conversa, setIndex, setView}) =>{
    return(
        <section className="section-modal-conversa">
            <div className="box-modal-conversa">
                <p className='nome-destinatario-modal-conversa'>{destinatario.nomeCompleto}</p>
                <button className='button-fechar-modal-conversa' onClick={() => {setIndex(null);setView(false)}}>x</button>
                <div className='box-mensagens-modal'>
                    {conversa.mensagens.map(item =>
                    item.user == user._id
                    ?
                    <p className='mensagem-remetente'>{item.texto}</p>
                    :    
                    <p className='mensagem-destinatario'>{item.texto}</p>
                    )}
                </div>
                <div className='box-input-modal-conversa'>
                    <input placeholder='Digite aqui' className='input-modal-conversa' />
                    <button className='button-enviar-mensagem-modal'>
                        Enviar
                    </button>
                </div>
            </div>
        </section>
    )
}