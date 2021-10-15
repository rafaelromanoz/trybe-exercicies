import PropTypes from 'prop-types';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import userActionLogin from '../actions/index';
import { connect } from 'react-redux';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      inputUser: '',
      inputEmail: '',
      validate: true,
    };
    this.validarEmail = this.validarEmail.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
    this.validarEmail(value);
  }

  validarEmail(email) {
    const re = /\S+@\S+\.\S+/;
    const response = re.test(email);
    if (response) {
      this.setState({ validate: false });
    }
  }

  render() {
    const { userActionLogin } = this.props;
    const { inputUser, inputEmail, validate } = this.state;
    return (
      <div>
        Digite seu usuário:{' '}
        <input type="text" name="inputUser" onChange={this.handleChange} />
        Digite sua senha:{' '}
        <input type="text" name="inputEmail" onChange={this.handleChange} />
        <Link to="/clientesCadastrados">
          <button
            disabled={validate}
            onClick={() => userActionLogin(inputUser, inputEmail)}
          >
            {' '}
            Entrar{' '}
          </button>
        </Link>
      </div>
    );
  }
}

Login.propTypes = {
  userActionLogin: PropTypes.func,
};

const mapDispatchToProps = { userActionLogin };

export default connect(null, mapDispatchToProps)(Login);
