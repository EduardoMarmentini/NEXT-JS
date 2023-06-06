import { useState } from "react"
import { GerarMega } from "../data/megasena"

export default function LayoutMega(){
    const [numeros, setNumeros] = useState(GerarMega())

    function rendLista(){
       return numeros.map(valor => <div className="resultado" key = {valor}> {valor}</div>)
    }
    
    return(
        <div > 
            <h1 className="tituloMega">
                MEGASENA NEXT
            </h1>

            <div className="corpoMega"> 

                <div className="corpoResultados" >
                    {rendLista()}
                </div>

            </div>

            <br/>
        </div>
    )
}