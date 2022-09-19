

export default function Usuario(props) {

    let Nome = 'Igor';

    return (
        <div class="usuario">
            <img onClick={(e) => props.clickToChangePhoto()} src={props.perfil} alt="" />
            <div class="texto">
                <strong>
                    {Nome}
                </strong>
                <span>
                    {props.userName}
                    <ion-icon onClick={props.changeUserName} name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    )
}