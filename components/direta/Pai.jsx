import Filho from "./Filho";

export default function Pai(props) {
    return (
        <div>
            <h1>Familia {props.familia}</h1>
            <Filho nome = "Samuel" familia = {props.familia}/>
            <Filho nome = "Gilherme" familia = {props.familia}/>
            <Filho {...props} nome = "Heitor"/>
        </div>
    )
}