import React from 'react';
import { useSelector } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import PokemonCard from './PokemonCard';
import './styles.css';

const PokemonList = () => {
  const pokemons = useSelector(state => state.list);

  return (
    <div className='wrapper'>
      <Grid>
        {pokemons.map((pokemon, index) => {
          return <PokemonCard key={`pokemon-${index}`} pokemon={pokemon} />;
        })}
      </Grid>
    </div>
  );
};

export default PokemonList;
