/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { search } from '../../utils/bookservice';
import ActionButton from '../ActionButton';

const StyledDiv = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`;

const SearchContainerDiv = styled.div`
  width: 50%;
  position: relative;
`;

const StyledInput = styled.input`
  outline: none;
  background: transparent;
  color: white;
  border: 1px solid cyan;
  border-left: none;
  border-right: none;
  border-top: none;
  width: 100%;
  height: 25px;
  flex: 2;

  ::-webkit-search-cancel-button {
    color: ${(props) => props.theme.text};
  }
`;

// eslint-disable-next-line react/prop-types
export default function Search({ updateSearchResult }) {
  const [searchTerm, setSearchTerm] = useState('');
  const onSearchPerformed = useCallback(() => {
    search(searchTerm).then((result) => {
      updateSearchResult(result);
    });
  }, [searchTerm, updateSearchResult]);

  const searchOnEnter = (e) => {
    if (e.key === 'Enter') onSearchPerformed(e);
  };

  return (
    <SearchContainerDiv>
      <label className="visually-hidden" htmlFor="search-books">
        Search books
      </label>
      <StyledInput
        type="search"
        id="search-books"
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyUp={searchOnEnter}
        placeholder="Title, Author. E.g Micro, Michael Chrichton"
      />
      <StyledDiv>
        <ActionButton
          textButton
          type="submit"
          label="Search"
          onClicked={onSearchPerformed}
        />
      </StyledDiv>
    </SearchContainerDiv>
  );
}
