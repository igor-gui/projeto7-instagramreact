export default function Usuario(props) {
    let nome = props.nome;

    function userName() {
        nome = (prompt('Que nome deseja usar?'))
    }

    return (
        <div class="usuario">
            <img src="assets/img/catanacomics.svg" />
            <div class="texto">
                <strong>{props.user}</strong>
                <span>
                    {nome}
                    <ion-icon onClick={userName} name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    )
}