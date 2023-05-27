export default function repeticao1(){
    const listAprovados = [
        "Joao",
        "Maria",
        "Ana",
        "Bia",
        "Carlos",
        "Daniel",
        "Laura",
    ]

    function renderizaeLista(){

        return listAprovados.map((nome, index) => <li key = {index}>{nome}</li>)
    }

    return (
        <ul>
            {renderizaeLista()}
        </ul>
       ) 
}

// Podemos aplicar repetições de componentes por meio de for e listas 

// function renderizaeLista(){
//     const itens  = []
    
//     for (let index = 0; index < listAprovados.length; index ++){
//         itens.push(<li key = {index} >{listAprovados[index]}</li>)
//     } 

//     return itens
// }

// Por meio da função map 

// function renderizaeLista(){

//     return listAprovados.map(function(nome, index){
//     return(
//         <li key = {index}>
//             {nome}
//         </li>
//     )
// }) 
// }

// E por meio de map com arrow function
// function renderizaeLista(){

//     return listAprovados.map((nome, index) => <li key = {index}>{nome}</li>)
// }