import { useState } from "react"

export default function mouse() {
    // React Hooks
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    // const arrayX = useState(0)
    // let x = arrayX[0]
    // const setX = arrayX[1]

    // const arrayY = useState(0)
    // let y = arrayY[0]
    // const setY = arrayY[1]

    const estilo = {
        display : "flex",
        justifyContent : "center",
        flexDirection : "column", 
        alignItems : "center",
        backgroundColor : '#222',
        color : '#fff',
        height : "100vh"
    }

    function Mover(event){
        console.log(event.clientX, event.clientY)
        setX(event.clientX)
        setY(event.clientY)
    }

    return (
        <div style={estilo} onMouseMove={Mover} >
            <span>Eixo X: {x}</span>
            <span>Eixo Y: {y}</span>
        </div>
    )
}