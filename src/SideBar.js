import Sugestoes from "./Sugestoes"
import Usuario from "./Usuario"

import { useState } from "react";

export default function SideBar() {
    
    
    const [profImg, setProfImg] = useState('https://www.imagensempng.com.br/wp-content/uploads/2021/08/Icone-usuario-Png-1024x1024.png');

    const [user, setUser] = useState("user")



    function changeUserName() {
        const newUser = (prompt('Qual seu usuário?'))
        setUser(newUser)
        return newUser
    }

    function changePhoto(){
        const fotoNova = prompt('Cole o link para sua nova foto de perfil')
        setProfImg(fotoNova)
    }


    

    return (
        <div class="sidebar">
            
            <Usuario perfil={profImg}  clickToChangePhoto={changePhoto}  changeUserName={changeUserName} userName={user} />
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

