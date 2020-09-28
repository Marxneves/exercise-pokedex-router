import React, { Component } from 'react';
import pokemons from './data';
import star from './img/star.png';

import './pokemonDetails.css';

class PokemonDetails extends Component {
  constructor() {
    super()

    this.state = {
      favorite: [],
    }
    this.favoriteFunction = this.favoriteFunction.bind(this);
  }

  componentDidMount() {
    if (localStorage.favorite) {
      const arrayLocal = localStorage.favorite.split(',');
      const boolean = (arrayLocal.includes(this.props.match.params.id));
      this.setState({ favorite: [...arrayLocal] }, () => {
        document.getElementById('favorite').checked = boolean;
      });
    }
  }

  favoriteFunction({ target }) {
    const { checked } = target;
    const id = this.props.match.params.id;
    if (checked && !this.state.favorite.includes()) {
      this.setState((prevState) => ({ favorite: [...prevState.favorite, id] }), () => localStorage.favorite = this.state.favorite);
    }
    else {
      const array = this.state.favorite;
      array.splice(array.indexOf(id), 1);
      this.setState({ favorite: array }, () => localStorage.favorite = this.state.favorite);
      // this.setState((prevState) => ({ favorite: prevState.favorite.splice(prevState.favorite.indexOf(id), 1) }), () => localStorage.favorite = this.state.favorite);
    }
  }

  render() {
    const id = Number(this.props.match.params.id);
    const { name, type, averageWeight, image, foundAt, summary } = pokemons.find(pokemon => (pokemon.id === id));
    const fav = this.state.favorite;
    return (
      <div className="pokedex">
        <h2>{name} Details</h2>
        <label htmlFor="favorite">Pokemon favorite?
            <input type="checkbox" onClick={this.favoriteFunction} name="pokemon-favorite" id="favorite" />
        </label>
        <div className="pokemon">
          <div>
            <p>{name}</p>
            <p>{type}</p>
            <p>
              Average weight: {`${averageWeight.value} ${averageWeight.measurementUnit}`}
            </p>
          </div>
          <img src={image} alt={`${name} sprite`} />
          {fav.includes(this.props.match.params.id) || fav.includes(id) ? <img src={star} className="star-image" alt="Favorite Pokemon" /> : ""}
        </div>
        <div>
          <h2>Summary</h2>
          <p>{summary}</p>
          <h2>Game Locations</h2>
          <div className="map-image">
            {foundAt.map((found, index) =>
              <div className="map" key={index}>
                <img src={found.map} alt="Mapa" />
                <p>{found.location}</p>
              </div>
            )}
          </div>

        </div>
      </div>
    )
  }
}

export default PokemonDetails;