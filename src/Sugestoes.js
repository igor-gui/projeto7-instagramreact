export default function Sugestoes(){

    const arrSugestao = [
        {nome:'bad.vibes.memes', imgLink: "assets/img/bad.vibes.memes.svg", razao:'Segue você'},
        {nome:'chibirdart', imgLink: "assets/img/chibirdart.svg", razao:'Segue você'},
        {nome:'razoesparaacreditar', imgLink: "assets/img/razoesparaacreditar.svg", razao:'Novo no Instagram'},
        {nome:'adorable_animals', imgLink: "assets/img/adorable_animals.svg", razao:'Segue você'},
        {nome:'smallcutecats', imgLink: "assets/img/smallcutecats.svg", razao:'Segue você'}
    ]

    return (

        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {arrSugestao.map((e) => {
                return (
                     <div class="sugestao">
                <div class="usuario">
                    <img src={e.imgLink} />
                    <div class="texto">
                        <div class="nome">{e.nome}</div>
                        <div class="razao">{e.razao}</div>
                    </div>
                </div>

                <div class="seguir">Seguir</div>
            </div>
                )
            })}
           

        </div>
    )
}