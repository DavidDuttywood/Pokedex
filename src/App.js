import React from "react";
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Pokemon from "./components/Pokemon"
import Pokedex from "./components/Pokedex";

class App extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar sticky-top navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">Pokédex by David</a>
            <div className="d-flex">
              <a className="navbar-brand" href="https://pokeapi.co/"><small>Powered by PokeAPI</small></a>
            </div>
          </div>
        </nav>
        <div className="container">
          <Router>
            <Route path="/" exact component={Pokedex} />
            <Route path="/pokemon/:name" component={Pokemon} />
          </Router>
        </div>
      </div>

    );
  }

}
export default App;
