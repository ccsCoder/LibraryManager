/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import Shelf from '../components/Shelf';

const ShelvesUl = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export default function ShelvesContainer() {
  return (
    <>
      <ShelvesUl>
        <Shelf shelfName="Recently Read" />
      </ShelvesUl>
    </>
  );
}
