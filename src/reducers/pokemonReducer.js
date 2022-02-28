import { SET_POKEMON, TOGGLE_FAVORITE, TOGGLE_LOADER } from "../actions/type";

const initialState = {
  list: [],
  loading: true,
  favorites: {}
}

const pokemonReducer = (state = initialState, action) => {  
  switch (action.type) { 
    case SET_POKEMON:
      return {...state, list: action.payload }
    case TOGGLE_LOADER:
      return {...state, loading: !state.loading }
    case TOGGLE_FAVORITE:
      const value = state.favorites[action.payload]
      return {...state, favorites: {...state.favorites, [action.payload]: !value } }
    default:
      return state
  }
}

export default pokemonReducer
