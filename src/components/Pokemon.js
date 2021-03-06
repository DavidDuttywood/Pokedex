import React from 'react';
import PokedexFlavourData from './PokedexFlavourData'
import PokemonGameBaseStats from './PokemonGameBaseStats'
import { Link } from 'react-router-dom';

class Pokemon extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pokemonGameData: {},
            pokemonSpeciesInfoURL: "", //needs depricating
            pokemonSpeciesInfo: {}
        }
    }

    componentDidMount() {
        fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.match.params.name}`)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    pokemonGameData: response,
                    pokemonSpeciesInfoURL: response.species.url
                });
                fetch(`${this.state.pokemonSpeciesInfoURL}`)
                    .then(response => response.json())
                    .then(response => {
                        this.setState({
                            pokemonSpeciesInfo: response
                        });
                    })
                    console.log(this.state.pokemonGameData)

            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        if (this.state.pokemonSpeciesInfo.name) { 
            return (
                <div className="pokemonInfoWrapper">
                    <Link to="/">Back</Link>
                    <PokedexFlavourData {...this.state} />
                    <PokemonGameBaseStats {...this.state} />
                </div>
            )
        }
        return (<div>loading</div>)
    }
}

export default Pokemon;