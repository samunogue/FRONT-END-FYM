import { MenuLateral } from '../../Components/menu/menu';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom"
import './style.css';
import { endpoints } from '../../Config/config';
import { Get } from '../../Config/requisitions';
import { ModalFormsContrato } from '../../Components/CadastroContrato';
import { ModalContrato } from '../../Components/ModalContrato';
export const ContratosSection = () =>{
    const [load, setLoad] = useState(false)
    const [alerta, setAlerta] = useState(null)
    const [viewModal, setViewModal] = useState(false)
    const [modalContrato, setModalContrato] = useState(null)
    const {state} = useLocation()
    const [user, setUser] = useState(state.user)
    const [tipo,setTipo] = useState(null)
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
            setTipo('musico')
            params.id = user._id
            tipo = 'musico'
        }else{
            setTipo('contratante')
            params.id = user._id
            tipo = 'contratante'
        }
        var url = tipo == 'musico' ? endpoints.listarMusicos : endpoints.buscarContratante
        const userJson = await Get(url, params)
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
        {viewModal == true &&(
            <ModalFormsContrato setView={setViewModal} user={user}  />
        )}
        {modalContrato != null &&(
            <ModalContrato tipo={tipo} item={modalContrato} user={user} setView={setModalContrato} buscarContratos={buscarUser}  />
        )}
        <MenuLateral user={user} />
        <main className="page-contratos">
            <h1 className="titulo-page-contratos">Meus Contratos</h1>
            <section className='section-box-contratos'>
            {user.contratos.length > 0 &&(
                user.contratos.map(item =>
                <div className='box-contrato-contratos' key={item.codigo}>
                    <p className='codigo-contrato-contratos'>{item.codigo}</p>
                    <p className='status-contrato-contratos'>Status: {item.status}</p>
                    <div className='box-nome-contrato-contratos'>
                        <p className='legenda-nome-contratos'>Músico</p>
                        <p className='nome-box-contrato-contratos'>{item.musico.nome}</p>
                    </div>
                    <div className='box-nome-contrato-contratos'>
                        <p className='legenda-nome-contratos'>Contratante</p>
                        <p className='nome-box-contrato-contratos'>{item.contratante.nome}</p>
                    </div>
                    <button className='button-box-contrato-contratos' onClick={() => setModalContrato(item)}>
                        Ver Contrato
                    </button>
                </div>    
                )
            )}
            </section>
            {tipo == 'contratante' &&(
                <button className='button-criar-contrato-contratos' onClick={()=> setViewModal(true)}>
                    Criar Contrato
                </button>
            )}
        </main> 
        </>
    )
}