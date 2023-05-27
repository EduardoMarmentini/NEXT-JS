import Filho from "./Filho";

export default function Pai(props) {
    return (
        <div>
            <Filho nome = "Samuel" familia = {props.familia}/>
            <Filho nome = "Gilherme" familia = {props.familia}/>
            <Filho nome = "Heitor" familia = {props.familia}/>
        </div>
    )
}