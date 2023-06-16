import { Component } from "react";

export default class Count extends Component{

    // Metodo construtor
    constructor(props){
        super(props)

        // O metodo ?? server para setar um valor default caso não seja informado um valor pela propriedade do componente
        this.state = {
            numero: props.valorInicial ?? 0,
            passo:  props.passo ?? 1
        }
    }
    
    // Determinamos a função como uma arrow por conta do comportamento do this
    inc = () => {
        this.setState({
            numero : this.state.numero + this.state.passo
        })
    }

    // Metodo de decrementar usando this e a estruta das classses JS 
    dec = () => {
        this.setState({
            numero : this.state.numero - this.state.passo
        })
    }

    // Metodo de alterar o estado do valor passo
    aletararPasso = (event) => {
        this.setState({ passo: + event.target.value });
    }
    // Renderizando uma parte do formulario por meio desse outro metodo 
    renderForm() {
        return(
            <div>
                <input type="number"
                    min={1} 
                    max={1000} 
                    value={this.state.passo} 
                    onChange={this.aletararPasso}
                />
                <button onClick={this.inc}>+</button>
                <button onClick={this.dec}>-</button>
            </div>
        )
    }

    // Retorna a primeira parte do componente via metodo
    render() {
        return(
            <div>
                <h1>
                    Contador(usando classe)     
                </h1>
                <h2>{this.state.numero}</h2>
                {this.renderForm()}
            </div>
        )
    }
        
        
    
}