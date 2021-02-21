import { Link } from 'react-router-dom';
import '../App.css';

function PokedexEntry(props) {

    var name = props.name[0].toUpperCase() + props.name.substring(1);;

    return (
        <div className="pokemonWrapper">
            <Link className="pokemon" to={`/Pokemon/${props.name}`}>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/${props.number}.png`} />
            </Link>
            <h5>{name}</h5>
        </div>
    )
}

export default PokedexEntry;
