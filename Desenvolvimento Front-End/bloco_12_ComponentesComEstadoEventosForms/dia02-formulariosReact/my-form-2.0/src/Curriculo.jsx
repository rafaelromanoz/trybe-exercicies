import { Component } from 'react';
import Button from './Button';

class Curriculo extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
      tipo: '',
      resumo: '',
      cargo: '',
      descricao: '',
      apartamento: '',
      casa: '',
      formularioComErros: true,
      submited:false
    };
  }
  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value }, () => {
      this.handleError();
    });
  }
  handleError() {
    const {
      nome,
      email,
      cpf,
      endereco,
      cidade,
      estado,
      tipo,
      resumo,
      cargo,
      descricao,
      apartamento,
      casa,
      formularioComErros,
    } = this.state;
    nome.toUpperCase();
    const erros = [
      !nome || nome.length > 40,
      !email || nome.length > 50,
      !cpf || nome.length > 11,
      !endereco || endereco.length > 200,
      !cidade || cidade > 28,
    ];
    const formularioPreenchido = erros.every((error) => error !== true);

    this.setState({
      formularioComErros: !formularioPreenchido,
    });
  }
  onBlur() {
    this.setState({
      cidade: this.state.cidade.toLowerCase(),
    });
  }
  sendForm = () => {this.setState({submited:true})

  }
  render() {
    return (
      <div>
        <fieldset>
          <form>
            <label htmlFor="nome">
              Nome:
              <input
                type="text"
                name="nome"
                value={this.state.nome}
                onChange={this.handleChange}
                id="nome"
              />
            </label>
            <br />
            E-mail:
            <label htmlFor="email">
              <input
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                id="email"
              />
            </label>
            <br />
            <label htmlFor="cpf">
              CPF:
              <input
                type="text"
                name="cpf"
                value={this.state.cpf}
                onChange={this.handleChange}
                id="cpf"
              />
            </label>
            <br />
            <label htmlFor="endereco">
              Endereço:
              <input
                type="text"
                name="endereco"
                value={this.state.endereco}
                onChange={this.handleChange}
                id="endereco"
              />
            </label>
            <br />
            <label htmlFor="cidade">
              Cidade:
              <input
                type="text"
                name="cidade"
                value={this.state.cidade}
                onChange={this.handleChange}
                id="endereco"
                onBlur={this.onBlur}
              />
            </label>
            <br />
            <span>Selecione o estado: </span>
            <select
              id="estado"
              value={this.state.estado}
              onChange={this.handleChange}
              name="estado"
            >
              <option value="AC">Acre</option>
              <option value="AL">Alagoas</option>
              <option value="AP">Amapá</option>
              <option value="AM">Amazonas</option>
              <option value="BA">Bahia</option>
              <option value="CE">Ceará</option>
              <option value="DF">Distrito Federal</option>
              <option value="ES">Espírito Santo</option>
              <option value="GO">Goiás</option>
              <option value="MA">Maranhão</option>
              <option value="MT">Mato Grosso</option>
              <option value="MS">Mato Grosso do Sul</option>
              <option value="MG">Minas Gerais</option>
              <option value="PA">Pará</option>
              <option value="PB">Paraíba</option>
              <option value="PR">Paraná</option>
              <option value="PE">Pernambuco</option>
              <option value="PI">Piauí</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="RN">Rio Grande do Norte</option>
              <option value="RS">Rio Grande do Sul</option>
              <option value="RO">Rondônia</option>
              <option value="RR">Roraima</option>
              <option value="SC">Santa Catarina</option>
              <option value="SP">São Paulo</option>
              <option value="SE">Sergipe</option>
              <option value="TO">Tocantins</option>
              <option value="EX">Estrangeiro</option>
            </select>
            <br />
            <div onChange={this.handleChange}>
              <input
                type="radio"
                name="local"
                id=""
                value={this.state.apartamento}
              />
              Apartamento
              <input type="radio" name="local" id="" value={this.state.casa} />
              Casa
            </div>
            <br />
            <h3>Seus dados:</h3>
            <fieldset>
              <form>
                <label htmlFor="resumo">
                  Digite um resumo do currículo:
                  <textarea
                    name="resumo"
                    id="resumo "
                    cols="30"
                    rows="10"
                    value={this.state.resumo}
                    onChange={this.handleChange}
                  ></textarea>
                </label>
                <br />
                <label htmlFor="cargo">
                  Digite um resumo do seu cargo!
                  <textarea
                    name="cargo"
                    id="cargo"
                    cols="30"
                    rows="10"
                    value={this.state.cargo}
                    onChange={this.handleChange}
                  ></textarea>
                </label>
                <label htmlFor="cargo">
                  Digite uma descrição do seu cargo
                  <input
                    type="text"
                    name="descricao"
                    value={this.state.descricao}
                    onChange={this.handleChange}
                  />
                </label>
              </form>
            </fieldset>
          </form>
          {this.state.formularioComErros ? (
            <span style={{ color: 'red' }}>Preencha corretamente os campos</span>
          ) : (
            <span style={{ color: 'green' }}>
              Todos os campos foram preenchidos
            </span>
          )}
        </fieldset>
        <Button nome={this.state.nome} click={this.sendForm} submited={this.state.submited}></Button>
      </div>
    );
  }
}

export default Curriculo;
