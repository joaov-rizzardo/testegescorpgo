import { Link } from "react-router-dom";
import Beer from '../images/beer.png';
//importação do estilo do componente
import '../styles/nav.scss'

export function Nav() {
    return (
        <nav>
            <div>
                <img src={Beer} alt="" />
                <h2>Desafio ReactJS</h2>
            </div>


            <div>
                <Link to={'/'}>Listagem</Link>
                <Link to={'/cadastro'}>Cadastro</Link>
            </div>
        </nav>
    )
}