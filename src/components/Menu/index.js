import React from 'react';
import { Menu as SemanticMenu, Container, Image } from 'semantic-ui-react';
import logo from '../../statics/images/pokeball.svg';

const Menu = () => {
  return (
    <SemanticMenu fixed='top'>
      <Container>
        <SemanticMenu.Item to='/'>
          <Image size='mini' src={logo} />
        </SemanticMenu.Item>
        <SemanticMenu.Item to='/'>Home</SemanticMenu.Item>
        <SemanticMenu.Item to='/' position='right'>
          Favorites
        </SemanticMenu.Item>
      </Container>
    </SemanticMenu>
  );
};

export default Menu;
