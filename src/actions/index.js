import { GET_POKEMONS, SET_POKEMON, TOGGLE_FAVORITE, TOGGLE_LOADER } from "./type";

export const setPokemon = payload => ({
  type: SET_POKEMON,
  payload
})

export const getPokemonsDetails = payload => ({
  type: GET_POKEMONS,
  payload
}) 


export const toggleLoader = () => ({
  type: TOGGLE_LOADER
})

export const toggleFavorite = payload => ({
  type: TOGGLE_FAVORITE,
  payload
})