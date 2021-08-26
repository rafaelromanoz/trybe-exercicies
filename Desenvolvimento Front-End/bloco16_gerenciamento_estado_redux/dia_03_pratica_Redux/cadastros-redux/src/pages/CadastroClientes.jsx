import { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { cadastroAction } from '../actions/index';

class CadastroClientes extends Component {
  constructor() {
    super();
    this.state = {
      inputUserCadastro: '',
      inputEmailCadastro: '',
      inputIdadeCadastro: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { cadastroUsers } = this.props;
    const { inputEmailCadastro, inputIdadeCadastro, inputUserCadastro } =
      this.state;
    return (
      <div>
        <h1>Cadastro de clientes</h1>
        <fieldset>
          Nome: <input type="text" name="inputUserCadastro" onChange={this.handleChange}/>
          Email: <input type="text" name="inputEmailCadastro" onChange={this.handleChange}/>
          Idade: <input type="text" name="inputIdadeCadastro" onChange={this.handleChange}/>
        </fieldset>
      <button onClick={() => cadastroUsers(inputUserCadastro,inputEmailCadastro,inputIdadeCadastro)}
        >Enviar cadastro</button>
        <Link to="/clientesCadastrados">Ir para clientes cadastros</Link>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  cadastroUsers: (user, email, idade) =>
    dispatch(cadastroAction(user, email, idade)),
});

export default connect(null, mapDispatchToProps)(CadastroClientes);
