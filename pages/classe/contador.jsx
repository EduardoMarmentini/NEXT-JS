import { Component } from "react";
import ContadorPagina from "../../components/Count"

export default class Contador extends Component{

    render(){
        return (
            <div>
                <ContadorPagina valorInicial={100} />
            </div>
        )
    }
}