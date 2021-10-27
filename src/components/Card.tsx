import { faWindowClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/card.scss'

type CardProps = {
    image : string;
    titulo : string;
    descricao : string;
    delItem : () => void;
}

export function Card(props: CardProps){
    return(
        <div className="card">
            <div id="btn-close">
                <button onClick={props.delItem}><FontAwesomeIcon icon={faWindowClose} /></button>
            </div>
            <img src={props.image} alt="" />
            <h4>{props.titulo}</h4>
            <p>{props.descricao}</p>
        </div>
    )
}