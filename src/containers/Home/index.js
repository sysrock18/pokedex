import React, { useEffect } from 'react';
import Searcher from '../../components/Searcher';
import PokemonList from '../../components/PokemonList';
import './styles.css';
// import { getPokemons } from '../../api/getPokemons';
// import { getPokemonsDetails, setPokemon } from '../../actions';
import { getPokemonsDetails } from '../../actions';
// import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import Loader from '../../components/Loader';
import { useSelector } from 'react-redux';
// import axios from 'axios';

// function Home({ list, setPokemons }) {
function Home() {
  const dispatch = useDispatch()
  const loading = useSelector(state => state.loading)

  useEffect(() => {
    // getPokemons().then(res => {
    //   const pokemonList = res.data.results
    //   return Promise.all(pokemonList.map(pokemon => (
    //     axios(pokemon.url)
    //   )))
    //   .then(pokeResp => {
    //     const pokeData = pokeResp.map(pokeItem => pokeItem.data)
    //     dispatch(setPokemon(pokeData))
    //   })
    // })
    dispatch(getPokemonsDetails())
  }, [])

  return (
    <div className='Home'>
      <Searcher />
      {loading && <Loader />}
      <PokemonList />
    </div>
  );
}

// OLD REDUX WITH CONNECT
// const mapStateToProps = state => ({
//   list: state.list
// })

// const mapDispatchToProps = dispatch => ({
//   setPokemons: value => dispatch(setPokemon(value))
// })

// export default connect(mapStateToProps, mapDispatchToProps)(Home)
export default Home
