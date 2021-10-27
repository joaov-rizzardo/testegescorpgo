import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useState, useEffect, FormEvent } from "react";
import { Link } from "react-router-dom";
import { Card } from "../components/Card";
import { Nav } from "../components/Nav";
import '../styles/listagem.scss'
type DadosProp = {
    name: string;
    image_url: string;
    description: string;
}

export function Listagem() {

    //variavel que irá armazenar um array com as informações referentes as bebidas
    const [bebidas, setBebidas] = useState<DadosProp[]>([])

    //variavel usada na filtragem dos dados
    const [find, setFind] = useState('')

    //variavel para recuperar os dados do formulário de pesquisa
    const [pesquisarPor, setPesquisarPor] = useState('')

    useEffect(() => {
        //Fazendo a requisição para recuperar os dados das bebidas
        axios.get('https://api.punkapi.com/v2/beers')
            .then(dados => {

                //percorrendo o localstorage para recuperar os dados cadastrados
                for (let i = 0; i <= localStorage.length; i++) {
                    if (localStorage[i] === undefined) {
                        continue;
                    } else {
                        dados.data.push(JSON.parse(localStorage[i]))
                    }
                }

                //percorrendo o array de retorno para recuperar os dados
                setBebidas(dados.data)
            })
    }, [])

    //função que vai para setar a constante find, que será utilizada para filtrar os dados
    function handleFind(event: FormEvent) {
        event.preventDefault();
        setFind(pesquisarPor);
    }

    async function delItem(index:any) {
        //adiciona o state bebidas a uma varivel auxiliar
        const bebidasAux = bebidas.slice()

        //remove o index desejado da variavel auxiliar
        bebidasAux.splice(index,1)

        //seta o state bebidas com o valor da variável auxiliar
        setBebidas(bebidasAux)
        
    }

    return (
        <div >
            <Nav />
            <main id="content">
                <form onSubmit={handleFind}>
                    <input 
                        placeholder="O que deseja pesquisar?"
                        type="text"
                        onChange={event => { setPesquisarPor(event.target.value) }}
                        value={pesquisarPor}
                    />
                    <button type="submit">Pesquisar <FontAwesomeIcon icon={faSearch}/></button>
                </form>
                <div id="cards-list">
                    {   
                        bebidas.map((bebida, index) => {
                            if (find !== '') {
                                if (bebida.name.includes(find)) {
                                    return <Card image={bebida.image_url} titulo={bebida.name} delItem={()=>delItem(index)} descricao={bebida.description} />
                                }
                            } else {
                                return <Card image={bebida.image_url} titulo={bebida.name} delItem={()=>delItem(index)} descricao={bebida.description} />
                            }
                            
                        })}
                </div>
            </main>
        </div>
    )
}