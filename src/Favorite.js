import React from 'react';
import pokemons from './data';
import Pokemon from './Pokemon';
class Favorite extends React.Component {

  render() {
    const favoritePokemons = pokemons.filter(pokemon => localStorage.favorite.split(',').includes(`${pokemon.id}`));
    return (
      <div className="center-content">
        <h1>
          Favorites Pokemons:
        </h1>
        {favoritePokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
      </div>
    )
  }
}

export default Favorite;