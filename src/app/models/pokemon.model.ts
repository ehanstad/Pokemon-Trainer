/**
 * This is the interface for a pokemon
 */
export interface Pokemon {
  name: string
  url: string
}

/**
 * This is the interface for a response from the pokemon api
 */
export interface PokemonResponse {
  results: Pokemon[],
}
