export interface NamedAPIResourceType {
  name: string,
  url: string,
}

export interface NamedAPIResourceListType {
  count: number,
  next: string,
  previous: string,
  results: NamedAPIResourceType[],
}

export interface PokemonAbilityType {
  ability: NamedAPIResourceType,
}

export interface PokemonMoveType {
  move: NamedAPIResourceType,
}

export interface SpriteType {
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
  sprites: SpriteType,
}

export interface PokemonWithAbilityType {
  pokemon: NamedAPIResourceType,
}

export interface AbilityType {
  pokemon: PokemonWithAbilityType[],
}

export interface MoveType {
  learned_by_pokemon: NamedAPIResourceType[],
}
