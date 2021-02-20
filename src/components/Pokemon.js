import React from 'react';
import { Link } from 'react-router-dom';

class Pokemon extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pokemonGameData: {},
            pokemonSpeciesInfo: "",
            pokemonFlavourText: ""
        }
    }

    componentDidMount() {
        fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.match.params.name}`)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    pokemonGameData: response,
                    pokemonSpeciesInfo: response.species.url
                });
                fetch(`${this.state.pokemonSpeciesInfo}`)
                    .then(response => response.json())
                    .then(response => {
                        this.setState({
                            pokemonFlavourText: response.flavor_text_entries[10].flavor_text,
                        });
                    })

            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return (
            <div>
                <p>{this.state.pokemonFlavourText}</p>
                <Link to="/">Back</Link>
            </div>
        )
    }
}

export default Pokemon;