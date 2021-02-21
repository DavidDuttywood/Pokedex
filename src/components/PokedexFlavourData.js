function PokedexFlavourData({ ...props }) {
    console.log("here", {...props})
    return (
        //center the image and show evolution chart underneath.
        <div>
            <div>Name: {props.pokemonSpeciesInfo.name}</div>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/${props.pokemonSpeciesInfo.id}.png`} />
            <div>Flavour: {props.pokemonSpeciesInfo.flavor_text_entries[0].flavor_text}</div>
        </div>
    )
}

export default PokedexFlavourData;