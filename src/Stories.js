



export default function Stories() {

    const stories = [
        { imgAdress: "assets/img/9gag.svg", usuario: '9gag' },
        { imgAdress: "assets/img/meowed.svg", usuario: "meowed" },
        { imgAdress: "assets/img/barked.svg", usuario: "barked" },
        { imgAdress: "assets/img/nathanwpylestrangeplanet.svg", usuario: "nathanwpylestrangeplanet" },
        { imgAdress: "assets/img/wawawicomics.svg", usuario: "wawawicomics" },
        { imgAdress: "assets/img/respondeai.svg", usuario: "respondeai" },
        { imgAdress: "assets/img/filomoderna.svg", usuario: "filomoderna" },
        { imgAdress: "assets/img/memeriagourmet.svg", usuario: "memeriagourmet"}
    ]

    return (
        <div class="stories">
            {
                stories.map((e) => {
                    return (
                        <div class="story">
                            <div class="imagem">
                                <img src={e.imgAdress} alt={e.usuario} />
                            </div>
                            <div class="usuario">
                                {e.usuario}
                            </div>
                        </div>
                    )
                })
            }

            < div class="setinha" >
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div >

        </div >
        
    )
}