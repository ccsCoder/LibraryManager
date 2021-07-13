import React from 'react';
import styled from 'styled-components';

const SearchResultArticle = styled.article`
  min-width: 500px;
  max-width: 700px;
  height: 280px;
  background: ${(props) => props.theme.secondaryBg};
  color: #fdca40;
  display: flex;
  justify-content: flex-start;
  gap: 32px;
  align-items: flex-start;

  > img {
    height: 280px;
  }

  h4,
  h5 {
    margin: 4px 0;
  }

  h5 {
    color: lightgray;
  }
`;

// eslint-disable-next-line react/prop-types
export default function SearchResult({ title, authors, coverImage }) {
  return (
    <SearchResultArticle>
      <img src={coverImage} alt={`${title} book's cover`} />
      <aside>
        <h4>{title}</h4>
        <h5>{authors}</h5>
      </aside>
    </SearchResultArticle>
  );
}
