import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Image, Label, Divider, Grid, Icon } from 'semantic-ui-react';
import { toggleFavorite } from '../../actions';
import { FAV_COLOR, MAIN_COLOR } from '../../utils/constants';
import './styles.css';

const PokemonCard = ({ pokemon }) => {
  const favorites = useSelector(state => state.get('favorites')).toJS()
  const dispatch = useDispatch()

  const handleFavorite = () => dispatch(toggleFavorite(pokemon.id))

  return (
    <Grid.Column mobile={16} tablet={8} computer={4}>
      <div className='PokemonCard'>
        <button className='PokemonCard-favorite' onClick={handleFavorite}>
          <Icon name='favorite' color={favorites[pokemon.id] ? FAV_COLOR : null} />
        </button>
        <Image
          centered
          src={pokemon.sprites.front_default}
        />
        <h2 className='PokemonCard-title'>{pokemon.name}</h2>
        <Divider />
        {pokemon.types.map(typeItem => (
          <Label color={MAIN_COLOR} key={typeItem.slot}>
            {typeItem.type.name}
          </Label>
        ))}
      </div>
    </Grid.Column>
  );
};

export default PokemonCard;
