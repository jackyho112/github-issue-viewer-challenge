import React from 'react';
import styled from 'styled-components';

import colors from '../constants/colors';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 2.5rem;
  padding: 1rem;
  font-size: 1.5rem;
  height: 10%;
`;

const LabelSpan = styled.div`
  background: ${colors.pink};
  color: ${colors.white};
  margin-left: 1rem;
  height: 1.5rem;
  font-size: 1.2rem;
  text-align: center;
  padding: 0.4rem;
`;

function renderLabel(label) {
  return <LabelSpan key={label.id}>{label.name}</LabelSpan>;
}

const Labels = ({ labels }) => {
  return (
    <Container>
      {labels.length > 0 ? labels.map(renderLabel) : 'No label'}
    </Container>
  );
};

export default Labels;
