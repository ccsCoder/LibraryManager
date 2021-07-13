import { useEffect, useState } from 'react';
import { search } from '../utils/bookservice';

function useSearchBook(searchTerm) {
  const [result, setResults] = useState({
    status: false,
  });

  useEffect(() => {
    search(searchTerm).then((searchResults) => {
      console.log(searchResults);
      setResults(searchResults);
    });
  }, [searchTerm]);

  return result;
}

export default useSearchBook;
