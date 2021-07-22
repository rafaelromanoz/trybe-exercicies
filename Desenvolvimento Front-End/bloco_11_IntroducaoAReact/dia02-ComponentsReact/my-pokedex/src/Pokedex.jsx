import React, { Component } from 'react';
import objOfPokemons from './data';
import './Pokemon.css';
import Pokemon from './Pokemon';
class Pokedex extends Component {
  render() {
    return (
      <div className="div-pokemon">
        {objOfPokemons.map(({ name, type, averageWeight:{value,measurementUnit}, id, image }) => {
          return (
            <Pokemon
              value={value}
              name={name}
              type={type}
              id={id}
              measurementUnit={measurementUnit}
              image={image}
            />
          );
        })}
      </div>
    );
  }
}


export default Pokedex;
