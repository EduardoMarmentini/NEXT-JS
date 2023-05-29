function acao1(){
    console.log("acao1")
}

export default function Botao(){
    function acao2(){
        console.log("acao2")
    }
    
    function acao5(event){
        console.log(event)
    }

    return (
        <div>
            <button onClick={acao1}>Click #01</button>
            <button onClick={acao2}>Click #02</button>
            <button onClick={function (){console.log("acao3")}}>
                Click #03
            </button>
            <button onClick={() => console.log("acao4")}>
                Click #04
            </button>
            <button onClick={acao5}>Click #05</button>
            <button onClick={event => acao5(event.altKey)}>
                Click #05 V2
            </button>
        <div>
            <input type="text" onChange={event => console.log(event.target.value)}/>
        </div>
        </div>
    )
}