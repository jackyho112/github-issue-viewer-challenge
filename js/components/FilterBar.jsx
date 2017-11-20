import React from 'react';
import styled from 'styled-components';
import { sortBy } from 'lodash';

import filters from '../constants/filters';
import colors from '../constants/colors';

const FilterSpan = styled.span`
  color: ${colors.grey};
  margin-right: 1.5rem;
  cursor: pointer;
  font-size: 2rem;
`;

const SelectedFilterSpan = FilterSpan.extend`
  color: ${colors.pink};
`;

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1.5rem 0;
  padding: 2rem;
`;

const FilterBar = ({ currentFilter, selectFilter }) => (
  <ContainerDiv>
    {sortBy(Object.keys(filters), key => filters[key].order).map(label => {
      if (label === currentFilter) {
        return (
          <SelectedFilterSpan onClick={() => selectFilter(label)} key={label}>
            {label}
          </SelectedFilterSpan>
        );
      }

      return (
        <FilterSpan onClick={() => selectFilter(label)} key={label}>
          {label}
        </FilterSpan>
      );
    })}
  </ContainerDiv>
);

export default FilterBar;
