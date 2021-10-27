import { FormEvent, useState } from "react";
import { Nav } from "../components/Nav";

export function Cadastro(){

    const [dataCadastro, setDataCadastro] = useState({
        'name' : '',
        'description' : '',
        'image_url' : ''
    })

    async function handleCadastro(event:FormEvent){
        event.preventDefault()
        let indice = 0
        //verifica se já existe registro no localStorage
        if(localStorage[0] !== undefined){
            indice = localStorage.length
        }
        //seta um novo item no localstorage com os dados obtidos do formulário
        localStorage.setItem(indice.toString(),JSON.stringify(dataCadastro))
    }
    return(
        <div>
            <Nav />
            <main>
                <form onSubmit={handleCadastro}>
                    <input 
                        type="text" 
                        placeholder="Nome"
                        onChange={event => {
                            setDataCadastro(prevState => {
                                return {...prevState, 'name': event.target.value }
                            })
                        }}
                        value={dataCadastro.name}
                    />
                    <textarea 
                        placeholder="Descrição" 
                        cols={30} 
                        rows={10}
                        onChange={event => {
                            setDataCadastro(prevState => {
                                return {...prevState, 'description': event.target.value }
                            })
                        }}
                        value={dataCadastro.description}         
                    />
                    <input 
                        type="text" 
                        placeholder="Url da imagem"
                        onChange={event => {
                            setDataCadastro(prevState => {
                                return {...prevState, 'image_url': event.target.value }
                            })
                        }}
                        value={dataCadastro.image_url} 
                    />
                    <button type="submit">Cadastrar</button>
                </form>
            </main>
        </div>
    )
}