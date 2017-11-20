import React from 'react';
import styled from 'styled-components';

import colors from '../constants/colors';
import searchIconUrl from '../../_assets/icons/search.svg';

const Container = styled.div`
  position: relative;
  width: 40%;
  height: 5rem;
`;

const SearchIcon = styled.img`
  position: absolute;
  left: 1rem;
  top: 1.5rem;
  width: 3rem;
  height: 3rem;
  z-index: 1;
  color: ${colors.lightGrey};
`;

const Input = styled.input`
  position: relative;
  width: 100%;
  height: 100%;
  padding-left: 5rem;
  font-size: 3rem;

  &::placeholder {
    color: ${colors.lightGrey};
  }
`;

const SearchBar = ({ onChange, value, placeholder }) => (
  <Container>
    <SearchIcon src={searchIconUrl} />
    <Input
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      type="text"
    />
  </Container>
);

export default SearchBar;
