export function getPokemonIndexFromUrl(url) {
    url = url.replace("https://pokeapi.co/api/v2/pokemon/", "");
    url = url.replace("https://pokeapi.co/api/v2/pokemon-species/", "");
    url = url.replace("/", "");
    return url;
  }

export function getEvolutionChain(evolutionChain) {
    var evolutionChainData = [];
    console.log(evolutionChain)
    if (evolutionChain.id == 67) { 
        //eevee
    }
    else if (evolutionChain.chain.evolves_to.length == 1) {
        //works for 3 stage evos but not too - e.g ratata
        // also, is this too verbose?
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
        if (evolutionChain.chain.evolves_to[0].evolution_details.length == 1){
            evolutionChainData.push({
                name: evolutionChain.chain.evolves_to[0].evolves_to[0].species.name,
                level: evolutionChain.chain.evolves_to[0].evolves_to[0].evolution_details[0].min_level,
                speciesURL: evolutionChain.chain.evolves_to[0].evolves_to[0].species.url
            })
        }
    }
    return evolutionChainData;
}