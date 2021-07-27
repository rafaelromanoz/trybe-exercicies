import { Component } from 'react';

class FormExercicio extends Component {
  render() {
    const { handleClick, favorito, handleChange, value} = this.props;


    return (
      <div>
        <button type="button" onClick={handleClick}>
          Número de cliques
        </button>
        <label>
          Digite o estado que você mais gosta
          <textarea
            name="estadoFavorito"
            value={favorito}
            onChange={handleChange}
          ></textarea>
          <input
              type="number"
              name="idade"
              value={value}
              onChange={handleChange}
            />
        </label>
      </div>
    );
  }
}

export default FormExercicio;
