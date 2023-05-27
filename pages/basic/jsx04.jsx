export default function jsx4(){
    const text   = "estou dentro de uma const em JS"
    const texth3 = <p>{3 * 3 + 1}</p>
    return (
        <div>
            <h1 className="titulo">integração com JS e JSX</h1>
            <br/>
            <h2 id="titulo2">{text} por meio das chaves '{}' posso trazer valores do JS pra o JSX</h2>
            <br/>
            <h3>Fazendo contas via JS 3 * 3 + 1 = {texth3}</h3>
            <br/>
            <h4>Utilizando funções do JS como a Math.max {Math.max(200, 900)}</h4>
            <br/>
            <h5>Utilizando  com funções via JS, 4 esta entre 2 e 10 {checkbeteween(4, 2, 10)}</h5>
        </div>
    )
}

function checkbeteween(val, min, max){
    if (val >= min && val <= max){
        return "true"
    }
    else {
        return "false"
    }
    
}