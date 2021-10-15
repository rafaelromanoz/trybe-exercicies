import PropTypes from "prop-types";
import { Component } from 'react';
import { Redirect,Link } from 'react-router-dom';
import { connect } from 'react-redux';


class ClientesCadastrados extends Component {
  render() {
    const { logado, clientesCadastrados } = this.props;
    if(clientesCadastrados === undefined) {
      <p>Não possui usuários cadastrados</p>
    }
    return (
      <div>
        {logado ? null : <Redirect to="/pageNotFound" />}
        Clientes cadastrados
        <div>
          {clientesCadastrados && <h3>{clientesCadastrados.email}</h3>}
        </div>
        <Link to="/cadastroClientes">Ir para cadastro de clientes</Link>
      </div>
    );
  }
}

ClientesCadastrados.propTypes = {
  clientesCadastrados: PropTypes.shape({
    email: PropTypes.string
  }).isRequired,
  logado: PropTypes.string.isRequired,
}

const mapStateToProps = (state) => ({
  logado: state.usuarioLogin.logado,
  clientesCadastradosSistema: state.usuarioLogin.usuariosCadastradosSistema[0],
});
export default connect(mapStateToProps)(ClientesCadastrados);
