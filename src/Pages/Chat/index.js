import { useEffect, useState } from 'react';
import { Await, useLocation, useNavigate } from "react-router-dom"
import { MenuLateral } from '../../Components/menu/menu';
import { ModalConversa } from '../../Components/ModalConversa';
import { endpoints } from '../../Config/config';
import { Get } from '../../Config/requisitions';
import './style.css';
export const ChatSection = () =>{
    const {state} = useLocation()
    const [conversas,setConversas] = useState(null)
    const [destinatarios, setDestinatarios] = useState(null)
    const [user, setUser] = useState(state.user)
    const [indexConversa, setIndexConversa] = useState(null)
    const [viewModalConversa,setModalConversa] = useState(false)
    useEffect(()=>{
        const buscar = async () =>{
            await buscarConversas()
        }
        buscar()
    },[])
    const buscarConversas = async () => {
        try {
          const conversas = await Get(endpoints.buscarConversas, { id: user._id });
      
          if (conversas.hasOwnProperty('error')) {
            setConversas(null);
            setDestinatarios(null);
            return;
          }
      
          var arrayUser = [];
      
          for (const element of conversas) {
            let outroUsuarioId;
      
            if (element.usuarios[0] === user._id) {
              outroUsuarioId = element.usuarios[1];
            } else if (element.usuarios[1] === user._id) {
              outroUsuarioId = element.usuarios[0];
            }
      
            var buscarUser = await Get(endpoints.listarMusicos, { id: outroUsuarioId });
      
            if (buscarUser.hasOwnProperty('error')) {
              buscarUser = await Get(endpoints.buscarContratante, { id: outroUsuarioId });
            }
      
            arrayUser.push(buscarUser);
          }
      
          console.log(arrayUser.length);
          setDestinatarios(arrayUser);
          setConversas(conversas);
        } catch (error) {
          console.error("Erro ao buscar conversas:", error);
        }
      };
    return(
        <>
        <MenuLateral user={user} />
        {viewModalConversa == true &&(
            <ModalConversa setIndex={setIndexConversa} setView={setModalConversa} user={user} destinatario={destinatarios[indexConversa]} conversa={conversas[indexConversa]} />
        )}
        <main className="page-chat">
                <h1 className="titulo-page-chat">Minhas Conversas</h1>
                <section className='section-conversas'>
                    {conversas != null && destinatarios != null &&(
                        conversas.map((item, index) => (
                        <div key={index} className="div-conversa" onClick={() =>{setIndexConversa(index);setModalConversa(true)}}>
                              <p className='nome-destinatario-conversa'>{destinatarios[index].nomeCompleto}</p>
                              <p className='mensagem-conversa'>{item.mensagens[item.mensagens.length-1].texto}</p>
                        </div>
                        ))
                    )}
                </section>
        </main>
        
        </>
    )
}