import React, { useState } from 'react';
import styled from 'styled-components';
import Search from '../components/Search';
import SearchResult from '../components/SearchResult';
import { getCoverUrl } from '../utils/bookservice';

const SearchContainerDiv = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  gap: 16px;

  .error-message {
    margin-top: 8px;
    font-size: 12px;
    ::before {
      content: '!!!';
    }
  }
`;

export default function SearchContainer() {
  const [searchResult, setSearchResult] = useState({
    status: false,
  });

  return (
    <SearchContainerDiv>
      <Search updateSearchResult={setSearchResult} />
      {!searchResult.status && (
        <div className="error-message"> Cannot find a book with that name </div>
      )}
      {searchResult.status && (
        <SearchResult
          title={searchResult.bookName}
          authors={searchResult.authors}
          coverImage={getCoverUrl(searchResult.coverId, 'M')}
        />
      )}
    </SearchContainerDiv>
  );
}
