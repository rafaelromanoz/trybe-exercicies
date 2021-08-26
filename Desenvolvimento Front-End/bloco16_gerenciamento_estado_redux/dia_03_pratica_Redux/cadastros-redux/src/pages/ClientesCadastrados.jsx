import { Component } from 'react';
import { Redirect,Link } from 'react-router-dom';
import { connect } from 'react-redux';


class ClientesCadastrados extends Component {
  render() {
    const { logado, clientesCadastrados } = this.props;
    return (
      <div>
        {logado ? null : <Redirect to="/pageNotFound" />}
        Clientes cadastrados
        <div>
          <p>{`Nome: ${clientesCadastrados.usuarioCadastro}`}</p>
          <p>{`Email: ${clientesCadastrados.emailCadastro}`}</p>
          <p>{`Idade: ${clientesCadastrados.idadeCadastro}`}</p>
        </div>
        <Link to="/cadastroClientes">Ir para cadastro de clientes</Link>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  logado: state.usuarioLogin.logado,
  clientesCadastrados: state.usuarioLogin,
});
export default connect(mapStateToProps)(ClientesCadastrados);
