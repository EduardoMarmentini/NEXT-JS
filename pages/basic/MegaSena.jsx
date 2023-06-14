import { useEffect, useState } from "react"
import ResultadoDisplay from "../../components/ResultadoDisplay"
import { GerarMega } from "../../data/megasena"

export default function MegaSena(){

    const estilo = {
        display : "flex",
        justifyContent : "center",
        flexDirection : "column",
        alignItems : "center",
        backgroundColor : '#222',
        color : '#fff',
        height : "100vh"
    }
    const [quantidade, setQuantidade] = useState(6) 
    const [numeros, setNumeros] = useState([])

    // usado para fazer alterações direto na funcao, assim ela começa vazia e não apresenta erro
    useEffect(() => {
        setNumeros(GerarMega())
    }, [])

    function rendLista(){
       return numeros.map(valor => <ResultadoDisplay key = {valor} numero = {valor}/>)
    }
    
    return(
        <div style={estilo}> 
            <h1 className="tituloMega">
                MEGASENA NEXT
            </h1>

            <div className="corpoMega"> 

                <div className="corpoResultados" >
                    {rendLista()}
                </div>

            </div>
            
            <button onClick={() => setNumeros(GerarMega(quantidade))}>
                Gerar Aposta
            </button>
            <br/>
        </div>
    )
}