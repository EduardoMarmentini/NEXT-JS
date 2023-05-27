import Iten from "@/components/Itens";
import List from "@/components/List";

export default function componenteComFilho() {
    return (
        <div>
            <List>
                <Iten conteudo = "Item #08"/>
                <Iten conteudo = "Item #09"/>
                <Iten conteudo = "Item #10"/>
                <Iten conteudo = "Item #11"/>
                <Iten conteudo = "Item #12"/>
                <Iten conteudo = "Item #13"/>
            </List>
        </div>
    )
}