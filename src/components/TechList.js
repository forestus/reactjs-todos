import React, { Component } from 'react'
import TechItem from './TechItem';

export class TechList extends Component {
    state = {
        newTech: '',
        techs: []
    };
    //executa "onLoadComponent" ao terminar a inserção de um componente na tela
    componentDidMount(){
        const techs = localStorage.getItem('techs')
        if (techs) {
            this.setState({ techs: JSON.parse(techs)})
        }
    }
    // carrega o"nupdateStateandProps" toda vez que o componente sofrer qualquer 
    // atualização de propriedade ou estado.
    componentDidUpdate(prevProps,prevState){
        //this.props , this.state
        if(prevState.techs !== this.state.techs){
            localStorage.setItem('techs', JSON.stringify(this.state.techs))        }
    }
    // quando o componente deixa de existir...
    componentWillUnmount(){

    }


    handleInputChange = e => {
        this.setState({newTech: e.target.value})
    }
    handleSubmit = e => {
        e.preventDefault();
        this.setState({ 
            techs:[...this.state.techs,this.state.newTech],
            newTech: ''
        })
    }

    handleDelete = tech => {
        this.setState({
            techs: this.state.techs.filter(t => t !== tech)
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                type="text" 
                onChange={this.handleInputChange} 
                value={this.state.newTech}
                />
                <button type="submit">Enviar</button>
                <ul>
                    {this.state.techs.map(tech=>
                    (<TechItem
                    key={tech} 
                    tech={tech} 
                    Delete={() =>this.handleDelete(tech)} 
                    />
                    ))}
                </ul>
            </form>
        )
    }
}

export default TechList
