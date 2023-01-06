export interface NamedAPIResource {
  name: string,
  url: string,
}

export interface NamedAPIResourceList {
  count: number,
  next: string,
  previous: string,
  results: NamedAPIResource[],
}
export interface PokemonAbilityType {
  ability: NamedAPIResource,
}

export interface PokemonMoveType {
  move: NamedAPIResource,
}

export interface Sprite {
  back_default: string,
  back_female: string,
  back_shiny: string,
  back_shiny_female: string,
  front_default: string,
  front_female: string,
  front_shiny: string,
  front_shiny_female: string,
}

export interface PokemonType {
  name: string,
  abilities: PokemonAbilityType[],
  moves: PokemonMoveType[],
  sprites: Sprite,
}
