import React, { useEffect, useState } from 'react';
import { search } from '../utils/bookservice';

function searchBook(searchTerm) {
  const [results, setResults] = useState({
    status: false,
  });

  // console.log('Searching for: =', searchTerm);
  useEffect(() => {
    search(searchTerm).then((searchResults) => {
      console.log(searchResults);
      setResults(searchResults);
    });
  }, [searchTerm]);

  return results;
}

export default searchBook;
