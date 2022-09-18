
import { useState } from "react";


export default function Usuario(props) {

    const [nick, setNick] = useState(props.userName)
    
    function changeUserName() {
        const newUser = (prompt('Qual seu usuário?'))
        setNick(newUser)
    }

    return (
        <div class="usuario">
            <img src="assets/img/catanacomics.svg" alt="uiuiui" />
            <div class="texto">
                <strong>{props.name}</strong>
                <span>
                    {nick}
                    <ion-icon onClick={changeUserName} name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    )
}