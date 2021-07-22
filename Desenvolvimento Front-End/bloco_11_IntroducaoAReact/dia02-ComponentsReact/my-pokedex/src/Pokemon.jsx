import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './Pokemon.css';

class Pokemon extends Component {
  render() {
    const { name, type, value,measurementUnit,id, image } = this.props;
    return (
      <div className="container">
        <div className="heading">
        </div>
        <div className="row">
          <div className='card'>
            <div className="card-header">
              <h1>{name}</h1>
              <img src={image}></img>
              <p>{type}</p>
            </div>
            <div className="card-body">
              <p>{`${value} ${measurementUnit}`}</p>
            </div>
          </div>
        </div>
      </div>
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
