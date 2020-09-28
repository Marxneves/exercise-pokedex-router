import React from 'react';
import { Link } from 'react-router-dom';
// import './header.css';

class Header extends React.Component {
  render() {
    return (
      <header className="App">
        <img draggable="false" src="https://cdn.bulbagarden.net/upload/thumb/4/4b/Pok%C3%A9dex_logo.png/250px-Pok%C3%A9dex_logo.png" alt="Pokedex Logo" />
        <ul className="list">
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/favorite'>Favorite Pokemons</Link>
          </li>
        </ul>
      </header>
    )
  }
}

export default Header;