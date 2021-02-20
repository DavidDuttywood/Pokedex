import { Link } from 'react-router-dom';
import '../App.css';

function PokedexEntry(props) {

    var name = props.name[0].toUpperCase() + props.name.substring(1);;

    return (
        <Link className="pokemon" to={`/Pokemon/${props.name}`}>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/${props.number}.png`} />
            <p>{name}</p>
        </Link>
    )
}

export default PokedexEntry;
