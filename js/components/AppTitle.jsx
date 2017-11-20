import React from 'react';
import styled from 'styled-components';
import colors from '../constants/colors';

const Heading = styled.h1`
  font-size: ${props => `${props.fontSize}rem`};
  color: ${colors.white};
`;

const AppTitle = ({ title, fontSize }) => (
  <Heading fontSize={fontSize}>{title}</Heading>
);

export default AppTitle;
