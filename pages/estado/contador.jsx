import { useState } from "react"

export default function contador(){
    const [num, setCont] = useState(0)  

    function Sum(event){ 
        setCont( num + 1 )
    }

    function Sub(){ 
        setCont(num - 1)
    }

    const estilo = {
        display : "flex",
        justifyContent : "center",
        flexDirection : "column",
        alignItems : "center",
        backgroundColor : '#222',
        color : '#fff',
        height : "100vh"
    }

    return (
        <div style={estilo}>
            <h1>Contador</h1>
            <div>Valor:{num}</div>
            <button onClick={Sub}>-</button>
            <button onClick={Sum}>+</button>
        </div>
     )
}