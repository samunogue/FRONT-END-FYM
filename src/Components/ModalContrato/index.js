import { useState } from 'react';
import './style.css';
import { endpoints } from '../../Config/config';
import { Post} from '../../Config/requisitions.js'
export const ModalContrato = ({item, tipo, setView, buscarContratos, user}) =>{
    const [load,setLoad] = useState(false)
    const [alerta, setAlerta] = useState(null)
    const [viewAvaliacao, setViewAvaliacao] = useState(false)
    const [formsAvaliacao, setFormsAvaliacao] = useState({
        mensagem:'',
        nota:''
    })
    const responderContrato = async (resposta) =>{
        setLoad(true)
        const url = endpoints.responderContrato
        const response = resposta == 'true' ? 'true' : 'false'
        const body = {
            "cpfContratante":item.contratante.cpf,
            "cpfMusico":item.musico.cpf,
            "idContrato": item.codigo,
            "resposta": response  
        }
        const responder = await Post(url, body)
        console.log(responder)
        if(responder.error == false){
            //navigate(`/home`,{ state: { user:autenticar.user } }) 
            setLoad(false)
            setAlerta("Contrato respondido")
            setTimeout(()=>{
                setAlerta(null)
                buscarContratos(user)
                setView(null)
            },2000)
            return
        }
        setAlerta("Não foi possível responder o contrato")
        setLoad(false)
        setView(null)
        setTimeout(()=>{
            setAlerta(null)
        },2000)
        buscarContratos(user)
    }
    const avaliarMusico = async (musico) =>{
        setLoad(true)
        const url = endpoints.responderContrato
        const body = {
            "avaliacao":{
                "nome": user.nomeCompleto,
                "mensagem":"Excelente apresentação",
                "nota":"4.7"
            },
            "idMusico": item.id
        }
        const responder = await Post(url, body)
        if(responder.error == false){
            setLoad(false)
            setAlerta("Avaliação realizada")
            setTimeout(()=>{
                setAlerta(null)
                buscarContratos(user)
                setView(null)
            },2000)
            return
        }
        setAlerta("Não foi possível realizar a avaliação")
        setLoad(false)
        setView(null)
        setTimeout(()=>{
            setAlerta(null)
        },2000)
        buscarContratos(user)
    }
    return(
        <section className="section-modal-card-contrato">
            <div className="box-modal-card-contrato">
                <div className="box-header-modal-contrato">
                    <h1 className="titulo-modal-card-contrato">Contrato {item.codigo}</h1>
                    <button className="button-fechar-modal-contrato" onClick={() => setView(null)}>x</button>
                </div>
                {alerta != null 
                    ?
                    <h2 className='alerta-modal-contrato'>{alerta}</h2>
                    :
                    <>
                    <p className='legenda-modal-card-contrato'>Status</p>
                    <p className='dado-modal-card-contrato'>{item.status}</p>
                    <p className='legenda-modal-card-contrato'>Contratante</p>
                    <p className='dado-modal-card-contrato'>{item.contratante.nome}</p>
                    <p className='legenda-modal-card-contrato'>Músico</p>
                    <p className='dado-modal-card-contrato'>{item.musico.nome}</p>
                    <p className='legenda-modal-card-contrato'>Valor</p>
                    <p className='dado-modal-card-contrato'>{item.valor}</p>
                    <p className='termo-modal-card-contrato'>{item.termo}</p>
                    {tipo == 'musico' &&(
                    <div className='box-botoes-modal-contrato'>
                        <button className='botao-recusa-modal-contrato' onClick={()=> responderContrato('false')}>Recusar</button>
                        <button className='botao-aceite-modal-contrato' onClick={()=> responderContrato('true')}>Aceitar</button>
                    </div>
                    )}
                    {tipo == 'contratante' && item.status == "ACEITO" && viewAvaliacao == false &&(
                    <div className='box-botoes-modal-contrato'>
                        <button className='botao-aceite-modal-contrato' onClick={()=> setViewAvaliacao(true)}>Avaliar</button>
                    </div>
                    )}
                    {viewAvaliacao == true &&(
                    <div className='box-avaliacao-contrato'>
                        <h1 className='titulo-avaliacao-contrato'>Avaliação</h1>
                        <textarea placeholder='Comentário' className='textarea-avaliacao-contrato' />
                        <input placeholder='Nota (0 - 5)' className='input-nota-avaliacao-contrato' />
                        <button className='botao-avaliar-contrato' onClick={()=> avaliarMusico(item)}>Enviar</button>
                        <button className='botao-fechar-avaliacao-contrato' onClick={()=> setViewAvaliacao(false)}>Fechar</button>
                    </div>
                    )}

                    </>
                    }
            </div>
        </section>
    )
}