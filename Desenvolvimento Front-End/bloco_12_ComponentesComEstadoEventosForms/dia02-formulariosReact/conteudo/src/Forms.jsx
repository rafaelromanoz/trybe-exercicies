import React, { Component } from 'react';
import FormExercicio from './FormExercicio';

class Form extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick =this.handleClick.bind(this);
    this.state = {
      estadoFavorito: '',
      ondeDesejaMorar: '',
      numberOfLucky: 0,
      idade: 0,
      numeroDeCliques: 0,
      formularioComErros:true
    };
    this.fileInput = React.createRef();
  }
  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
    if(this.state.idade>2 || this.state.numeroDeCliques>10){
      this.setState({formularioComErros:false})
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    alert(`O arquivo selecionado é - ${this.fileInput.current.files[0].name}`);
  }
  handleClick() {
    this.setState((estadoAnterior) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1,
    }));
  }
  render() {
    return (
      <div>
        <h1>Forms exercicios</h1>
        <form className="form">
          <fieldset>
            <label>Onde você deseja morar?</label>
            <select
              name="morar"
              value={this.state.ondeDesejaMorar}
              onChange={this.handleChange}
            >
              <option value="mg">Minas</option>
              <option value="sp">São Paulo</option>
              <option value="sc">Florianópolis</option>
            </select>
            <input
              type="checkbox"
              name="favoriteGames"
              value={this.state.sim}
              onChange={this.handleChange}
            />
            <input type="file" ref={this.fileInput} />
            <button type="submit">Enviar</button>
            <h1>{`${this.state.numeroDeCliques} cliques!`}</h1>
            <FormExercicio handleClick={this.handleClick} handleChange ={this.handleChange}
            favorito={this.state.estadoFavorito} value ={this.state.idade}/>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Form;
