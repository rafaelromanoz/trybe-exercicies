import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './Pokemon.css';

class Pokemon extends Component {
  render() {
    const { name, type, value,measurementUnit,id, image } = this.props;
    return (
      <section>
        <h1>{name}</h1>
        <p>{type}</p>
        <p>{value}</p>
        <p>{id}</p>
        <p>{measurementUnit}</p>
        <img src={image} alt="pokeimage"></img>
      </section>
    );
  }
}
Pokemon.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  averageWeight: PropTypes.number,
};
export default Pokemon;
