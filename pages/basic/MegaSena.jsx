import LayoutMega from "@/components/LayoutMega";

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

    return (
        <div style={estilo}>
            <LayoutMega />
        </div>
    )
}