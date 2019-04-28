import React from 'react';
import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationItem as NavigationItem,
  StyledNavigationList as NavigationList,
} from 'baseui/header-navigation';
import { StyledLink as Link } from 'baseui/link';
import { StatefulSelect as Search, TYPE } from 'baseui/select';
import { Block } from 'baseui/block';
import { Avatar } from 'baseui/avatar';
import logo from '../../assets/halo-logo.png';

const options = {
  options: [
    { id: 'AliceBlue', color: '#F0F8FF' },
    { id: 'AntiqueWhite', color: '#FAEBD7' },
    { id: 'Aqua', color: '#00FFFF' },
    { id: 'Aquamarine', color: '#7FFFD4' },
    { id: 'Azure', color: '#F0FFFF' },
    { id: 'Beige', color: '#F5F5DC' },
    { id: 'Bisque', color: '#FFE4C4' },
    { id: 'Black', color: '#000000' },
  ],
  labelKey: 'id',
  valueKey: 'color',
  placeholder: 'Search colors',
  maxDropdownHeight: '300px',
};

export default () => (
  <HeaderNavigation>
    <NavigationList align={ALIGN.left}>
      <Block display="flex" alignItems="center">
        <img
          alt="Lgo"
          src={logo}
        />
      </Block>
    </NavigationList>
    <NavigationList align={ALIGN.center}>
      <NavigationItem>
        <Link href="#">GAMES</Link>
      </NavigationItem>
      <NavigationItem>
        <Link href="#">NEWS</Link>
      </NavigationItem>
      <NavigationItem>
        <Link href="#">ESPORTS</Link>
      </NavigationItem>
      <NavigationItem>
        <Link href="#">COMMUNITY</Link>
      </NavigationItem>
      <NavigationItem>
        <Link href="#">FORUMS</Link>
      </NavigationItem>
      <NavigationItem>
        <Link href="#">UNIVERSE</Link>
      </NavigationItem>
      <NavigationItem>
        <Link href="#">SHOP</Link>
      </NavigationItem>
    </NavigationList>
    <NavigationList align={ALIGN.right}>
      <NavigationItem style={{ width: '200px' }}>
        <Search
          {...options}
          type={TYPE.search}
          getOptionLabel={props => props.option.id || null}
          onChange={() => { }}
        />

      </NavigationItem>
    </NavigationList>
    <NavigationItem>
      <Avatar
        name={`user`}
      />
    </NavigationItem>
  </HeaderNavigation>
);