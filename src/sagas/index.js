import { all, call, put, takeEvery } from 'redux-saga/effects'
import { setPokemon, toggleLoader } from '../actions'
import { GET_POKEMONS } from '../actions/type'
import { getPokemonsDetails } from '../api/getPokemons'

function* callPokemonsDetails(action) {
  try {

    const pokemons = yield call(getPokemonsDetails)
    yield all([
      put(setPokemon(pokemons)),
      put(toggleLoader())
    ])
    // yield put(setPokemon(pokemons))
  } catch (e) {
    console.error(e)
    put(toggleLoader())
  }
}

export function* pokemonSaga() {
  yield takeEvery(GET_POKEMONS, callPokemonsDetails)
}
