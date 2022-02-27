import axios from "axios";
import { getPokemons } from "../api/getPokemons";
import { GET_POKEMONS, SET_POKEMON } from "./type";

export const setPokemon = payload => ({
  type: SET_POKEMON,
  payload
})

// export const getPokemonsDetails = () => dispatch =>  {
//   getPokemons().then(res => {
//     const pokemonList = res.data.results
//     return Promise.all(pokemonList.map(pokemon => (
//       axios(pokemon.url)
//     )))
//     .then(pokeResp => {
//       const pokeData = pokeResp.map(pokeItem => pokeItem.data)
//       dispatch(setPokemon(pokeData))
//     })
//   })
// }

export const getPokemonsDetails = payload => ({
  type: GET_POKEMONS,
  payload
}) 
