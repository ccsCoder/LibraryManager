/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from 'styled-components';

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
  flex: 2;
`;

const StyledButton = styled.button`
  background: ${({ theme: { button } }) => button.background};
  color: ${(props) => props.theme.buttonTextColor};
  border: ${(props) => props.theme.button.border};
  height: ${(props) => props.theme.button.minHeight};
  max-width: ${(props) => props.theme.button.width};
  flex: 1;
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
      <StyledButton type="submit">Search</StyledButton>
    </StyledDiv>
  );
}
