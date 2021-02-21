function PokemonGameBaseStats({ ...props }) {
    return (
        <div className="">
            {props.pokemonGameData.stats.map(stat => {
                return PokemonGameBaseStat(stat.stat.name, stat.base_stat)
            })}
        </div>
    )
}

function PokemonGameBaseStat(name, value) {
    console.log("name", name)
    console.log("val", value)

    return (
        <>
            <p className="statName">{name}</p>
            <div className="progress stat">
                <div className="progress-bar statValue" role="progressbar" style={{ width: value + "%" }}></div>
            </div>
        </>
    )
}

export default PokemonGameBaseStats;