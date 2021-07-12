const URL = 'http://openlibrary.org/search.json?title=';
const COVER_URL = 'http://covers.openlibrary.org/b/id/';

function search(searchKey) {
  fetch(`${URL}${encodeURIComponent(searchKey)}`)
    .then((response) => response.json())
    // eslint-disable-next-line camelcase
    .then(({ docs: { title, author_name, cover_i } }) => ({
      status: !!title,
      bookName: title,
      authors: author_name.join(','),
      coverId: cover_i,
    }))
    .catch((error) => {
      throw new Error(`Error occurred - ${error.message}`);
    });
}

function getCoverUrl(coverId, size = 'M') {
  return `${COVER_URL}${coverId}-${size}.jpg`;
}

export { search, getCoverUrl };
