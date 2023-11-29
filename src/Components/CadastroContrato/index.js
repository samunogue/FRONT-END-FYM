import { useState } from 'react';
import './style.css';
import { Get, Post } from '../../Config/requisitions';
import { endpoints } from '../../Config/config';
import { verificarForms } from '../../Utils/functions';
export const ModalFormsContrato = ({setView, user, musico}) =>{
    const [musicos, setMusicos] = useState(null)
    const [loadMusico, setLoadMusico] = useState(false)
    const [load ,setLoad] = useState(false)
    const [alerta, setAlerta] = useState(null)
    const [forms, setForms] = useState({
        contratante: user,
        musico: musico == undefined ? '' : musico,
        dataEvento:'',
        termo:'',
        valor:''
    })
    const buscarMusicos = async (nome) =>{
        if(nome == ''){
            setForms({
                ...forms,
                musico:''
            })
            setMusicos(null)
            return
        }
        setForms({
            ...forms,
            musico:''
        })
        setLoadMusico(true)
        const params = {
            nome:nome
        }
        const musicos = await Get(endpoints.listarMusicos, params)
        if(musicos == undefined || musicos == false){
            setMusicos(null)
            setLoadMusico(false)
            return
        }
        setMusicos(musicos)
        setLoadMusico(false)
    }
    const definirMusico = (item) =>{
        console.log(item)
        setMusicos(null)
        setForms({
            ...forms,
            musico:item
        })
    }
    const cadastrarContrato = async () =>{
        setLoad(true)
            const formsFinal = {
                "cpfContratante":forms.contratante.CPF,
                "cpfMusico":forms.musico.CPF,
                "dataEvento":forms.dataEvento,
                "termo":forms.termo,
                "valor":forms.valor
            }
            const verificacao = verificarForms(formsFinal)
            if(verificacao == false){
                setAlerta("Campos Inválidos")
                setLoad(false)
                setTimeout(()=>{
                    setAlerta(null)
                },2000)
                return
            }
            const cadastrar = await Post(endpoints.cadastrarContrato , formsFinal)
            if(cadastrar.error == false){
                setLoad(false)
                setAlerta("Cadastro realizado com sucesso")
                setTimeout(()=>{
                    setForms({
                        contratante: user,
                        musico: '',
                        dataEvento:'',
                        termo:'',
                        valor:''
                    })
                    setView(false)
                    setAlerta(null)
                },2000)
                return
            }
            setAlerta("Cadastro Inválido")
            setLoad(false)
            setTimeout(()=>{
                setAlerta(null)
            },2000)
    }
    return(
        <section className="section-modal-cadastro-contrato">
            <div className="box-modal-cadastro-contrato">
                <div className="box-header-modal-cadastro-contrato">
                    <h1 className="titulo-modal-cadastro-contrato">Criar Contrato</h1>
                    <button className="button-fechar-cadastro-contrato" onClick={() => setView(false)}>x</button>
                </div>
                <input className="input-cadastro-contrato" placeholder={user.nomeCompleto} type="text" disabled />
                <input value={forms.musico.nomeCompleto} className="input-cadastro-contrato"  placeholder="Músico" type="text" onChange={(event) => buscarMusicos(event.target.value)}  />
                {musicos != null &&(
                    <div className='box-musicos-forms-contratos'>
                        {musicos.map(item =>
                        <p onClick={() => definirMusico(item)} className='musico-rolagem-forms-cadastro'>{item.nomeCompleto}</p>    
                        )}
                    </div>
                )}
                <textarea value={forms.termo} className='textarea-cadastro-contrato' placeholder="Termos Contratuais" type="text" onChange={(event) => setForms({...forms,termo:event.target.value})} />
                <input value={forms.dataEvento} className="input-cadastro-contrato"  placeholder="Data Evento" type="date" onChange={(event) => setForms({...forms,dataEvento:event.target.value})} />
                <input value={forms.valor} className="input-cadastro-contrato"  placeholder="valor" type="text" onChange={(event) => setForms({...forms, valor:event.target.value})} />
                <button className="button-cadastrar-contrato" onClick={cadastrarContrato}>
                    Cadastrar
                </button>
                {alerta != null &&(
                    <p className={alerta == "Cadastro realizado com sucesso"? 'alerta-sucesso-forms-contratos': 'alerta-erro-forms-contratos'}>{alerta}</p>
                )}
            </div>
        </section>
    )
}