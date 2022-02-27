import axios from "axios";
import axiosInstance from "./config";

export const getPokemons = (limit = 151) => axiosInstance.get(`/pokemon?limit=${limit}`)

export const getPokemonsDetails = () => {
  return getPokemons().then(res => {
    const pokemonList = res.data.results
    return Promise.all(pokemonList.map(pokemon => (
      axios(pokemon.url)
    )))
    .then(pokeResp => {
      const pokeData = pokeResp.map(pokeItem => pokeItem.data)
      return pokeData
    })
  })
}
