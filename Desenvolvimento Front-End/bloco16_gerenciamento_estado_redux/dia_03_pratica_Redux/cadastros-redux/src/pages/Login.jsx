import { Component } from 'react';
import {Link} from 'react-router-dom';
import userActionLogin from '../actions/index';
import {connect} from 'react-redux';

class Login extends Component {
  constructor(){
    super();
    this.state= {
      inputUser:'',
      inputEmail:'',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name,value } = target;
    this.setState({
      [name]: value,
    });
  }

  render(){
    const { usersInput } =this.props;
    const {inputUser,inputEmail} =this.state;
    return(
      <div>
        Digite seu usuário: <input type="text" name="inputUser" onChange={this.handleChange}/>
        Digite sua senha: <input type="text" name="inputEmail" onChange={this.handleChange}/>

        <Link to='/clientesCadastrados'><button onClick={() => usersInput(inputUser,inputEmail)}>Entrar</button></Link>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => ({
  usersInput:(user,email)=> dispatch(userActionLogin(user,email))
})

export default connect(null, mapDispatchToProps)(Login);