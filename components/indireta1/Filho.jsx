export default function Filho(props){
    
    console.log(props.funcao)

    return (
        <div>
            <h1>Comp filho</h1>
            <button onClick={props.funcao}>Falar com o Pai</button>
            <button onClick={
                () => props.funcao("Passei no ENEM!", "Uhul", 10)}>
                Falar com o Pai V2
            </button>
        </div>
    )
}