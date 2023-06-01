export default function Contador(props) {
    
    const lbCont = {
        display : "flex",
        justifyContent: "center",
        alignItems : "center",
        width : "100px",
        height : "100px",
        Color: "white",
        backgroundColor : "black",
        fontSize: "2rem",
        borderRadius : "50px"
    }

    return (
      
        <div style={lbCont}>
            {props.numero}
        </div>
    )
}