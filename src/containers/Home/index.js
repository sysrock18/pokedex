import React, { useEffect } from 'react';
import Searcher from '../../components/Searcher';
import PokemonList from '../../components/PokemonList';
import { getPokemonsDetails } from '../../actions';
import { useDispatch } from 'react-redux';
import Loader from '../../components/Loader';
import { useSelector } from 'react-redux';
import './styles.css';

function Home() {
  const dispatch = useDispatch()
  const loading = useSelector(state => state.loading)

  useEffect(() => {
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

export default Home
