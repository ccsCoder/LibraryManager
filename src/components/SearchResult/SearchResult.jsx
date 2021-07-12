import React from 'react';

// eslint-disable-next-line react/prop-types
export default function SearchResult({ title, authors, coverImage }) {
  return (
    <article>
      <div>
        <img src={coverImage} alt={`${title} book's cover`} />
      </div>
      <h4>{title}</h4>
      <h5>{authors}</h5>
    </article>
  );
}
