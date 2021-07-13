/* eslint-disable camelcase */
const URL = 'http://openlibrary.org/search.json?title=';
const COVER_URL = 'http://covers.openlibrary.org/b/id/';

function search(searchKey) {
  return fetch(`${URL}${encodeURIComponent(searchKey)}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.docs.length === 0) {
        return { status: false };
      }
      const {
        title = '',
        author_name = ['unknown'],
        cover_i = '',
      } = data.docs[0];
      return {
        status: !!title,
        bookName: title,
        authors: author_name.join(','),
        coverId: cover_i,
      };
    })
    .catch((error) => {
      throw new Error(`Error occurred - ${error.message}`);
    });
}

function getCoverUrl(coverId, size = 'M') {
  return `${COVER_URL}${coverId}-${size}.jpg`;
}

export { search, getCoverUrl };
