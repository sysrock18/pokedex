// SLICES REDUX TOOLKIT
// envuelve el initial state, actions y reducer
// usa immer para inmutabilidad
// provee un builder para escuchar eventos del thunk pending/fullfilled/failure
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemonsDetails } from "../api/getPokemons";
import { toggleLoader } from "./ui";

const initialState = {
  list: [],
  favorites: {}
}

export const fetchPokemons = createAsyncThunk(
  'pokemon/fetchPokemons',
  async (_, { dispatch }) => {
    try {
      dispatch(toggleLoader())
      const pokeData = await getPokemonsDetails()
      dispatch(setPokemons(pokeData))
      dispatch(toggleLoader())
    } catch (e) {
      console.error(e)
      dispatch(toggleLoader())
    }
  }
)

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.list = action.payload
    },
    toggleFavorite: (state, action) => {
      const value = state.favorites[action.payload]
      return {...state, favorites: {...state.favorites, [action.payload]: !value } }
    }
  }
})

export const { setPokemons, toggleFavorite } = pokemonSlice.actions

export default pokemonSlice.reducer