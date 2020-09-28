import React from 'react';
import { Link } from 'react-router-dom';
import './pokemon.css';
import star from './img/star.png';

class Pokemon extends React.Component {
  constructor() {
    super()

    this.state = {
      favorite: localStorage.favorite ? localStorage.favorite.split(',') : [],
    }
  }

  render() {
    const fav = this.state.favorite;
    const { id, name, type, averageWeight, image } = this.props.pokemon;
    return (
      <div className="pokemon">
        <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>
            Average weight: {`${averageWeight.value} ${averageWeight.measurementUnit}`}
          </p>
          <Link to={`/pokemonDetails/${id}`}>Details</Link>
        </div>
        <img src={image} alt={`${name} sprite`} />
        {fav.includes(String(id)) ? <img src={star} className="star-image" alt="Favorite Pokemon" /> : ""}
      </div>
    );
  }
}

export default Pokemon;