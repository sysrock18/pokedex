import { fromJS } from "immutable";
import { SET_POKEMON, TOGGLE_FAVORITE, TOGGLE_LOADER } from "../actions/type";

const initialState = fromJS({
  list: [],
  loading: true,
  favorites: {}
})

const pokemonReducer = (state = initialState, action) => {  
  switch (action.type) { 
    case SET_POKEMON:
      return state.set('list', fromJS(action.payload))
      // return {...state, list: action.payload }
    case TOGGLE_LOADER:
      return state.set('loading', !state.get('loading'))
      // return {...state, loading: !state.loading }
    case TOGGLE_FAVORITE:
      // const value = state.favorites[action.payload]
      const value = state.get('favorites').get(action.payload)
      return state.setIn(['favorites', action.payload], !value)
      // return {...state, favorites: {...state.favorites, [action.payload]: !value } }
    default:
      return state
  }
}

export default pokemonReducer
