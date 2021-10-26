import { faWindowClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/card.scss'

type CardProps = {
    image : string;
    titulo : string;
    descricao : string;
}

export function Card(props: CardProps){
    return(
        <div className="card">
            <div id="btn-close">
                <button><FontAwesomeIcon icon={faWindowClose} /></button>
            </div>
            <img src={props.image} alt="" />
            <h4>{props.titulo}</h4>
            <p>{props.descricao}</p>
        </div>
    )
}