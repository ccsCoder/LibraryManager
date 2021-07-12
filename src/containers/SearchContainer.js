import React, { useState } from 'react';
import Search from '../components/Search';
import SearchResult from '../components/SearchResult';
import { getCoverUrl } from '../utils/bookservice';

export default function SearchContainer() {
  const [searchResult] = useState({
    status: false,
  });

  return (
    <>
      <Search />
      {!searchResult.status && <span> Cannot find a book with that name </span>}
      {searchResult.status && (
        <SearchResult
          title={searchResult.bookName}
          authors={searchResult.authors}
          coverImage={getCoverUrl(searchResult.coverId, 'S')}
        />
      )}
    </>
  );
}
