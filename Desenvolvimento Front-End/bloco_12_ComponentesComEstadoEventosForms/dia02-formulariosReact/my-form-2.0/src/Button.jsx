import { Component } from 'react';

class Button extends Component {
  render() {
    const { nome,click, submited } = this.props;
    return (
      <div>
        <h1>{nome}</h1>
        <button onClick={click}>Criar div</button>
        {(submited==true) ? <span>Deucerto</span> : <span>Deu errado</span>}
      </div>
    );
  }
}

export default Button;
