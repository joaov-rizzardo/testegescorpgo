import { FormEvent, useState } from "react";
import { Nav } from "../components/Nav";
import '../styles/cadastro.scss'
export function Cadastro() {

    const [dataCadastro, setDataCadastro] = useState({
        'name': '',
        'description': '',
        'image_url': ''
    })

    async function handleCadastro(event: FormEvent) {
        event.preventDefault()
        let indice = 0
        //verifica se já existe algum registro no localStorage
        if (localStorage[0] !== undefined) {
            indice = localStorage.length
        }
        //seta um novo item no localstorage com os dados obtidos do formulário
        localStorage.setItem(indice.toString(), JSON.stringify(dataCadastro))

        //limpa os campos após o registro ser concluido
        setDataCadastro({
            'name' : '',
            'description' : '',
            'image_url' : ''
        })
    }
    return (
        <div id="principal">
            <Nav />
            <div id="cadastro-content">
                <h2>Cadastrar nova bebida</h2>
                <main >
                    <form onSubmit={handleCadastro}>
                        <input
                            type="text"
                            placeholder="Nome"
                            onChange={event => {
                                setDataCadastro(prevState => {
                                    return { ...prevState, 'name': event.target.value }
                                })
                            }}
                            value={dataCadastro.name}
                        />
                        <textarea
                            placeholder="Descrição"
                            cols={30}
                            rows={15}
                            onChange={event => {
                                setDataCadastro(prevState => {
                                    return { ...prevState, 'description': event.target.value }
                                })
                            }}
                            value={dataCadastro.description}
                        />
                        <input
                            type="text"
                            placeholder="Url da imagem"
                            onChange={event => {
                                setDataCadastro(prevState => {
                                    return { ...prevState, 'image_url': event.target.value }
                                })
                            }}
                            value={dataCadastro.image_url}
                        />
                        <button type="submit">Cadastrar</button>
                    </form>


                </main>
            </div>

        </div>
    )
}