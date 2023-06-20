interface PessoaProps{
    nome: string,
    idade?: number
}
export default function Pessoa(props : PessoaProps){
    return (
        <div>
            <p>Nome: {props.nome}</p>
            <p>Idade: {props.idade ?? "não informada"}</p>
        </div>
            
    )
}