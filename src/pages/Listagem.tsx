import { Card } from "../components/Card";
import { Nav } from "../components/Nav";
import '../styles/listagem.scss'
export function Listagem() {
    return (
        <div id="content">
            <Nav />
            <main>
                <form action="">
                    <input type="text" />
                    <button type="submit">Pesquisar</button>
                </form>
                <div id="cards-list">
                <Card image="https://images.punkapi.com/v2/keg.png" titulo="Teste" descricao="testando"/>
                <Card image="https://images.punkapi.com/v2/6.png" titulo="Teste" descricao="testando"/>
                
                </div>
                
            </main>
        </div>
    )
}