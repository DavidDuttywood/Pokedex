export function getPokemonIndexFromUrl(url) {
    url = url.replace("https://pokeapi.co/api/v2/pokemon/", "");
    url = url.replace("https://pokeapi.co/api/v2/pokemon-species/", "");
    url = url.replace("/", "");
    return url;
  }

export function getEvolutionChain(evolutionChain) {
    var evolutionChainData = [];
    if (evolutionChain.id == 67) { 
        //eevee
    }
    else if (typeof evolutionChain.chain.evolves_to[0] !== 'undefined') {
        evolutionChainData.push({
            name: evolutionChain.chain.species.name,
            level: "",
            speciesURL: evolutionChain.chain.species.url
        })
        evolutionChainData.push({
            name: evolutionChain.chain.evolves_to[0].species.name,
            level: evolutionChain.chain.evolves_to[0].evolution_details[0].min_level,
            speciesURL: evolutionChain.chain.evolves_to[0].species.url
        })
        if (typeof evolutionChain.chain.evolves_to[0].evolves_to[0] !== 'undefined'){
            evolutionChainData.push({
                name: evolutionChain.chain.evolves_to[0].evolves_to[0].species.name,
                level: evolutionChain.chain.evolves_to[0].evolves_to[0].evolution_details[0].min_level,
                speciesURL: evolutionChain.chain.evolves_to[0].evolves_to[0].species.url
            })
        }
    }
    return evolutionChainData;
}