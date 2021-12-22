import { Pokemon, PokemonStat } from 'pokedex-promise-v2'

export const getPokemonName = (pokemon: { name: string }) => pokemon.name

export const getStatBaseValue = (pokemonStat: PokemonStat) =>
    pokemonStat.base_stat

export const getStatName = (pokemonStat: PokemonStat) =>
    pokemonStat.stat.name

export const getPrimaryType = (pokemon: Pokemon) => {
    const types = pokemon.types

    const primaryType = types.find((pokemonType) => pokemonType.slot === 1)

    if (primaryType) {
        return primaryType.type.name
    } else {
        return 'Unknown'
    }
}