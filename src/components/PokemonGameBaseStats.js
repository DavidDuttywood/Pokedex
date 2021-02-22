function PokemonGameBaseStats({ ...props }) {
    return (
        <div className="">
            {props.pokemonGameData.stats.map((stat, index) => {
                return PokemonGameBaseStat(stat.stat.name, stat.base_stat, index)
            })}
        </div>
    )
}

function PokemonGameBaseStat(name, value, index) {
    return (
        <div key={index}>
            <p className="statName">{name}</p>
            <div className="progress stat">
                <div className="progress-bar statValue" role="progressbar" style={{ width: value + "%" }}></div>
            </div>
        </div>
    )
}

export default PokemonGameBaseStats;