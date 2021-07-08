/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from 'styled-components';
import ActionButton from '../ActionButton';

const StyledDiv = styled.div`
  display: flex;
  width: 60%;
  justify-content: center;
  align-items: center;
  gap: 32px;
`;

const StyledLabel = styled.label`
  font-size: ${(props) => props.theme.label.fontSize};
  flex: 1;
  max-width: 100px;
`;

const StyledInput = styled.input`
  background: ${({ theme: { searchInput } }) => searchInput.background};
  color: ${(props) => props.theme.searchInput.color};
  border: ${(props) => props.theme.searchInput.border};
  height: ${(props) => props.theme.searchInput.height};
  border-radius: 5px;
  flex: 2;
`;

export default function Search() {
  return (
    <StyledDiv>
      <StyledLabel htmlFor="search-books">Search books</StyledLabel>
      <StyledInput
        type="search"
        id="search-books"
        placeholder="Type book name to search"
      />
      <ActionButton type="submit" label="Search" />
    </StyledDiv>
  );
}
