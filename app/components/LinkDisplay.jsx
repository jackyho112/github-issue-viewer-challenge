import React from 'react';
import styled from 'styled-components';
import colors from '../constants/colors';

const Span = styled.span`
  font-size: 2rem;
  color: ${colors.darkGrey};
`;

const LinkDisplay = ({ link }) => <Span>{link}</Span>;

export default LinkDisplay;
