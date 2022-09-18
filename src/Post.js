
export default function Post(banana) {
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
            <div class="conteudo">
                <img src={props.foto} />
            </div>
        )
    }

    function Fundo(props) {
        return (
            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
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
            <Fundo liker={banana.liker} likerPhoto={banana.likerPhoto} others={banana.others}/>
        </div>
    )
}