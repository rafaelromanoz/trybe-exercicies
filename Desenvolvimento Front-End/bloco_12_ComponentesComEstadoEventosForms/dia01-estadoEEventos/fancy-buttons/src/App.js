import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      numeroDeCliques1: 0,
      numeroDeCliques2: 0,
      numeroDeCliques3: 0,
    };
    this.evento1 = this.evento1.bind(this);
    this.evento2 = this.evento2.bind(this);
    this.evento3 = this.evento3.bind(this);
  }
  evento1() {
    this.setState((estadoAtual, __props) => ({
      numeroDeCliques1: estadoAtual.numeroDeCliques1 + 1,
    }));
    if (this.state.numeroDeCliques1 % 2 === 0) {
      console.log('Botão 1 verde');
    }
  }
  evento2() {
    this.setState((estadoAtual, __props) => ({
      numeroDeCliques2: estadoAtual.numeroDeCliques2 + 1,
    }));
    if (this.state.numeroDeCliques2 % 2 === 0) {
      console.log('Botão 2 verde');
    }
  }
  evento3() {
    this.setState((estadoAtual, __props) => ({
      numeroDeCliques3: estadoAtual.numeroDeCliques3 + 1,
    }));
    if (this.state.numeroDeCliques3 % 2 === 0) {
      console.log('Botão 3 verde');
    }
  }
  getColorButton(num) {
    return num % 2 === 0 ? 'green' : 'white';
  }
  render() {
    const { numeroDeCliques1, numeroDeCliques2, numeroDeCliques3 } = this.state;
    return (
      <div>
        <button
          onClick={this.evento1}
          style={{ backgroundColor: this.getColorButton(numeroDeCliques1) }}
        >
          {this.state.numeroDeCliques1}
        </button>
        <button onClick={this.evento2}>{numeroDeCliques2}</button>
        <button onClick={this.evento3}>{numeroDeCliques3}</button>
      </div>
    );
  }
}

export default App;
