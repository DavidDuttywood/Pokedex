import React from 'react';
import PokedexFlavourData from './PokedexFlavourData'
import PokemonGameBaseStats from './PokemonGameBaseStats'
import { Link } from 'react-router-dom';

class Pokemon extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pokemonGameData: {},
            pokemonSpeciesInfoURL: "",
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
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        if (this.state.pokemonSpeciesInfo.name) { //this is shit but what to check?
            return (
                <div className="pokemonInfoWrapper">
                    <Link to="/">Back</Link>
                    <PokedexFlavourData {...this.state} />
                    <PokemonGameBaseStats {...this.state} />
                </div>
            )
        }
        return (<div>test</div>)

    }
}

export default Pokemon;