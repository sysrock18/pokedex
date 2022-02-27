import { call, put, takeEvery } from 'redux-saga/effects'
import { setPokemon } from '../actions'
import { GET_POKEMONS } from '../actions/type'
import { getPokemonsDetails } from '../api/getPokemons'

function* callPokemonsDetails(action) {
  try {
    const pokemons = yield call(getPokemonsDetails)
    yield put(setPokemon(pokemons))
  } catch (e) {
    console.error(e)
  }
}

export function* pokemonSaga() {
  yield takeEvery(GET_POKEMONS, callPokemonsDetails)
}
