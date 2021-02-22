import React from 'react';
import { getPokemonIndexFromUrl } from '../helpers.js'
import PokedexEntry from "./PokedexEntry";

class Pokedex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pokemonList: [],
      filteredPokemonList: [],
      selectedPokemon: ""
    };
    this.filterPokedex = this.filterPokedex.bind(this);
  }

  componentDidMount() {
    fetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=700`)
      .then(response => response.json())
      .then(response => {
        this.setState({
          pokemonList: response.results,
          filteredPokemonList: response.results
        })
      })
      .catch(err => {
        console.log(err);
      });
  }

  filterPokedex() {
    var searchString = document.getElementById('searchPokemon').value;
    var filter = this.state.pokemonList.filter(p => {
      return p.name.includes(searchString.toLowerCase())
    });

    if (searchString != null && searchString.length > 0) {
      this.setState({
        filteredPokemonList: filter
      });
    }
    else {
      this.setState({
        filteredPokemonList: this.state.pokemonList
      });
    }
  }

  render() {
    return (
      <div className="pokedexWrapper">
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Search</span>
          <input type="text" className="form-control" type="text" onChange={this.filterPokedex} id="searchPokemon" />
        </div>
        {this.state.filteredPokemonList.map((p, index) => {
          return (
            <PokedexEntry
              key={index}
              number={getPokemonIndexFromUrl(p.url)}
              name={p.name}
            />
          );
        })}
      </div>
    )
  }
}

export default Pokedex;