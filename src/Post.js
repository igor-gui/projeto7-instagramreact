import { useState } from "react"

export default function Post(banana) {

    const [manyLikes, setManyLikes] = useState(banana.others)

    const [className, setclassName] = useState('')

    function curtir() {
        if (className === "filledRed") {
            const newClass = "";
            setclassName(newClass);
            setManyLikes(manyLikes - 1)
        } else {
            const newClass = "filledRed";
            setclassName(newClass);
            setManyLikes(manyLikes + 1)
        }
    }


    function Topo(props) {
        return (
            <div class="topo">
                <div class="usuario">
                    <img src={props.imagem} />
                    {props.usuario}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>
        )
    }

    function Conteudo(props) {
        return (
            <div onClick={curtir} class="conteudo">
                <img src={props.foto} />
            </div>
        )
    }

    function Fundo(props) {
        const [ionName, setIonName] = useState("bookmark-outline")


        function savePost() {
            if (ionName === "bookmark-outline") {
                const newIonName = "bookmark"
                setIonName(newIonName)
            } else {
                const newIonName = "bookmark-outline"
                setIonName(newIonName)
            }
        }

        return (
            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon onClick={curtir} class={className} name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon onClick={savePost} name={ionName}></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.likerPhoto} />
                    <div class="texto">
                        Curtido por <strong>{props.liker}</strong> e <strong>outras {props.others} pessoas</strong>
                    </div>
                </div>
            </div>
        )
    }

    
    return (
        <div class="post">
            <Topo imagem={banana.userImg} usuario={banana.nick} />
            <Conteudo foto={banana.contentImg} />
            <Fundo liker={banana.liker} likerPhoto={banana.likerPhoto} others={manyLikes} />
        </div>
    )
}