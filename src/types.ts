export interface Stat {
    stat: { name: string }
    base_stat: number
}

export interface PokemonType {
    type: { name: string }
    slot: number
}

export interface Pokemon {
    name: string
    sprites: { front_default: string }
    types: PokemonType[]
    stats: Stat[]
}