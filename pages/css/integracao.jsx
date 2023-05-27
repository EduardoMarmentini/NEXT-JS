// pelo react nos importamos o css 
// import "./integracao.css"
// Porem pelo Next importamos no arquivo _app.js onde tem o style global da aplicação

export default function integracao() {
    return (
        <div>
            <div className="vermelha">Texto 1</div>
            <div className="azul">Texto 2</div>
            <div className="branca">Texto 3</div>
        </div>
    )
}