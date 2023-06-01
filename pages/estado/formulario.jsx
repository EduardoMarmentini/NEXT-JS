import { useState } from "react"

export default function Formulario(){
    const [valor, setVal] = useState("")
    
    return (
        <div style={{
            display : "flex",
            flexDirection : "column"
        }}>
            <span>{valor}</span>
            <input type="text" value={valor} onChange={ event => setVal(event.target.value)}/>
            <button onClick={() => setVal(valor + "!")}>Changue</button>
        </div>
    )
}