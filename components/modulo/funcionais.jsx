/*
    Quando exportamos por padrão uma função ao ser importada em outro arquivo o nome dado ao componente pode ser diferente do original,
    porem quando exportamos sem a função default deve ser nomeada com o nome dado ao componente quando é criado 
*/
export function Comp1(){
    return (
        <h2>Comp1</h2>
    )
}

export const Comp2 = function(){
    return <h2>Comp2</h2>
}

export default function Comp3(){
    return(
        <div>
            <h2>Comp3</h2>
        </div>
    )
}

export const Comp4 = () => {
    return (
        <h2>Comp4</h2>
    )
}

const Comp5 = () => <h2>Comp5</h2> 

const Comp6 = (props) => (
    <div>
        <h2>Comp6 - {props.msg}</h2>
    </div>
)

export {
    Comp5, Comp6
}