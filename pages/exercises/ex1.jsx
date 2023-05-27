function MontaLista(val){
    const num = val 
    const lista  = []
    for(var index = 1; index <= num; index++){
        lista.push(<span>{index},</span>)
    }
    return lista
}

export default function ex1(){
    return (
        <div>
            {MontaLista(12)}
            <br/>
            {MontaLista(20)}
        </div>
    )
}

