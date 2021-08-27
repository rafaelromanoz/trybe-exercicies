import { Component } from 'react';
import { connect } from 'react-redux';
import fetchApi from '../services/fetchApi';
import {Button,Form} from'react-bootstrap';
class Home extends Component {
  constructor() {
    super();
    this.state = {
      selecionado: 'reactjs',
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }
  render() {
    const { funcCall } = this.props;
    const { selecionado } = this.state;
    return (
      <div>
       Selecione uma categoria: 
       <Form.Select name="selecionado" onChange={this.handleChange}>
          <option>reactjs</option>
          <option>fortnite</option>
          <option>fifa</option>
        </Form.Select>
        <br />
        <p>{`Categoria selecionada: ${selecionado}`}</p>
        <br />
        <Button onClick={() => funcCall(selecionado)}>Carregar</Button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  funcCall: (obj) => dispatch(fetchApi(obj)),
});
export default connect(null, mapDispatchToProps)(Home);
