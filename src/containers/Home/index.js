import React, { useEffect } from 'react';
import Searcher from '../../components/Searcher';
import PokemonList from '../../components/PokemonList';
import './styles.css';
import { getPokemons } from '../../api/getPokemons';
import { setPokemon } from '../../actions';
// import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';

// function Home({ list, setPokemons }) {
function Home() {
  const dispatch = useDispatch()

  useEffect(() => {
    getPokemons().then(res => {
      dispatch(setPokemon(res.data.results))
    })
  }, [])

  return (
    <div className='Home'>
      <Searcher />
      <PokemonList />
    </div>
  );
}

// const mapStateToProps = state => ({
//   list: state.list
// })

// const mapDispatchToProps = dispatch => ({
//   setPokemons: value => dispatch(setPokemon(value))
// })

// export default connect(mapStateToProps, mapDispatchToProps)(Home)
export default Home
