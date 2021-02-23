import React from 'react';
import { getPokemonIndexFromUrl, getEvolutionChain } from '../helpers'

class PokedexFlavourData extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            evolutionData: []
        }
    }

    componentDidMount() {
        fetch(this.props.pokemonSpeciesInfo.evolution_chain.url)
            .then(response => response.json())
            .then(result => {
                this.setState({
                    evolutionData: getEvolutionChain(result)
                })
            })
    }

    render() {
        if (this.state.evolutionData.length > 0) {
            return (
                <div>
                    <div>Name: {this.props.pokemonSpeciesInfo.name}</div>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/${this.props.pokemonSpeciesInfo.id}.png`} />
                    <div>Flavour: {this.props.pokemonSpeciesInfo.flavor_text_entries[0].flavor_text}</div>
                    <div className="row">
                        {this.state.evolutionData.map((pokemon, index) => {
                            return (
                                <div key={index} className="col-sm">
                                    <div className="card">
                                        <div className="card-body">
                                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/${getPokemonIndexFromUrl(pokemon.speciesURL)}.png`} />
                                            <h5 className="card-title">{pokemon.name}</h5>
                                            <p className="card-text">{pokemon.level}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>)
        }
        return (
            <div>
                <div>Name: {this.props.pokemonSpeciesInfo.name}</div>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/${this.props.pokemonSpeciesInfo.id}.png`} />
                <div>Flavour: {this.props.pokemonSpeciesInfo.flavor_text_entries[0].flavor_text}</div>
            </div>
        )
    }
}

export default PokedexFlavourData;