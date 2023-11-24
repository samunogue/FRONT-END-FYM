import { useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom"
import { MenuLateral } from '../../Components/menu/menu';
import './style.css';
export const ChatSection = () =>{
    const {state} = useLocation()
    const [user, setUser] = useState(state.user)
    return(
        <>
        <MenuLateral user={user} />
        <main className="page-chat">
                <h1 className="titulo-page-chat">Minhas Conversas</h1>
        </main> 
        </>
    )
}