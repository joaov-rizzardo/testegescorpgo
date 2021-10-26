import { Link } from "react-router-dom";

//importação do estilo do componente
import '../styles/nav.scss'

export function Nav(){
    return(
        <nav>
                <h2>Desafio ReactJS</h2>
                <div>
                    <Link to={'/'}>Listagem</Link>
                    <Link to={'/cadastro'}>Cadastro</Link>
                </div>
            </nav>
    )
}