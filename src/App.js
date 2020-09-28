import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './About';
import './App.css';
import pokemons from './data';
import Favorite from './Favorite';
import Header from './Header';
import NotFound from './NotFound';
import Pokedex from './Pokedex';
import PokemonDetails from './PokemonDetails';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/pokemonDetails/:id" component={PokemonDetails} />
        <Route path="/about" component={About} />
        <Route path="/favorite" component={Favorite} />
        <Route exact path="/">
          <div className="App">
            <Pokedex pokemons={pokemons} />
          </div>
        </Route>
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;