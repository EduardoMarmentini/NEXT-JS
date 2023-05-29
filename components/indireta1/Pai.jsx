import Filho from "./Filho";

export default function Pai(props){

    function FalarComigo(event1, event2, event3){
        console.log(event1, event2, event3)
    }

    return (
        <div>
            <Filho funcao={FalarComigo}/>
        </div>
    )
}