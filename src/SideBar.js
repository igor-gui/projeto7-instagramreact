import Sugestoes from "./Sugestoes"
import Usuario from "./Usuario"

import { useState } from "react";

export default function SideBar() {
    
    
    const [nome, setNome] = useState('name')

    const [user, setUser] = useState('')

    function Changename() {
        const nomeNovo = (prompt('Que nome deseja usar?'))
        setNome(nomeNovo);
        return nomeNovo             
    }


    function changeUserName() {
        const newUser = (prompt('Qual seu usuário?'))
        setUser(newUser);
    }

    return (
        <div class="sidebar">

            <Usuario name={Changename} userName={user} />
            <Sugestoes />
            <Links />
            <Copyright />

        </div>
    )
}





function Links() {
    return (
        <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
            Hashtags • Idioma
        </div>
    )
}

function Copyright() {
    return (
        <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
        </div>
    )
}

