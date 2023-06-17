/*
    - Quando importamos um componente que não esta exportado por dafult e queremos renomear ele usamos um "AS ns hora do import"
    - Ao importar componentes por default devemos importar ele fora a area de chaves 
*/
import Padrao, { Comp1 as Bla, Comp2, Comp4, Comp5, Comp6} from "../../components/modulo/funcionais";

export default function teste(){
    return(
        <div>
            <Bla />
            <Comp2 />  
            <Padrao />  
            <Comp4 />
            <Comp5 />
            <Comp6 msg="Legal"/> 
        </div>
    )
}