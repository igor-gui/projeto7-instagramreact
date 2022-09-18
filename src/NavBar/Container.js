import Icones from "./Icones"
import Logo from "./Logo"
export default function Container(props) {

    function Pesquisa(){
        return (
            <div class="pesquisa">
                <input type="text" placeholder="Pesquisar" />
            </div>
        )
    }

    return (
        <div class="container">

            <Logo />

            <Pesquisa />

            <Icones />

        </div>
    )
}