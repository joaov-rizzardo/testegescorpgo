import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../styles/card.scss'

type CardProps = {
    image : string;
    titulo : string;
    descricao : string;
    delItem : (index:any) => void;
}

export function Card(props: CardProps){
    return(
        <div className="card">
            <div id="btn-close">
                <button onClick={() => props.delItem(index)}><FontAwesomeIcon icon={faTimes} /></button>
            </div>
            <img src={props.image} alt="" />
            <h4>{props.titulo}</h4>
            <p>{props.descricao.substr(0,100)+'...'}</p>
        </div>
    )
}

function index(index: any): void {
    throw new Error('Function not implemented.')
}
