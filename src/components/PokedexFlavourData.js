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
                    <div>Evolution chain</div>
                    {this.state.evolutionData.map((pokemon, index) => {
                        console.log(pokemon)
                        return (
                            <div key={index}>
                                <div>{pokemon.name}</div>
                                <div>{pokemon.level}</div>
                                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/${getPokemonIndexFromUrl(pokemon.speciesURL)}.png`} />
                            </div>
                        )
                    })}
                </div>)
        }
        return (<p>test</p>)
    }
}

export default PokedexFlavourData;