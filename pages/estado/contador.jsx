import { useState } from "react"
import Contador from "@/components/Contador"

export default function contador(){
    const [num, setCont] = useState(0)  

    const estilo = {
        display : "flex",
        justifyContent : "center",
        flexDirection : "column",
        alignItems : "center",
        backgroundColor : '#222',
        color : '#fff',
        height : "100vh"
    }

    const btnStyle = {
        backgroundColor: '#ff11ff',
        borderRadius : "5px",
        width : "50px"
    }

    return (
        <div style={estilo}>
            <h1>Contador</h1>
            <div><Contador numero={num}/></div>
            <button style = {btnStyle} onClick={() => setCont(num - 1)}>-</button>
            <button style = {btnStyle} onClick={() => setCont(num + 1)}>+</button>
        </div>
     )
}