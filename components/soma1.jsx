export default function SomaUm(props){
// props s�o somente leituras, n�o se pode realizar oper��es matematicas ou seja n�o podemos usar o componente ++
    return(
        <div>
            <h1>{props.numero + 1}</h1>
        </div>
    )
}