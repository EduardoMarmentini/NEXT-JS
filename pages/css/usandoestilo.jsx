import Estilo from "@/components/Esitlo";

export default function usandoEstilo(){
    return (
        <div>
            <Estilo numero = {3} color="#000" direita={true}></Estilo>
            <Estilo numero = {-13} color="#f0f" direita={false}></Estilo>
            <Estilo numero = {223} color="#ff4f" direita={true}></Estilo>
        </div>
    )
    
}