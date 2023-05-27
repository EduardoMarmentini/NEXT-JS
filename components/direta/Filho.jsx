export default function Filho(props) {
    return (    
        <div style={{
            display: "flex"
        }}>
            <h1>{props.nome}</h1>
            <h2>{props.familia}</h2>
        </div>
    )
}