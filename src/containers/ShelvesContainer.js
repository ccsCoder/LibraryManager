/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Shelf from '../components/Shelf';

const ShelvesUl = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export default function ShelvesContainer({ showModal }) {
  return (
    <>
      <ShelvesUl>
        <Shelf showModal={showModal} shelfName="Fiction" />
        <Shelf showModal={showModal} shelfName="Fiction" />
        <Shelf showModal={showModal} shelfName="Fiction" />
        <Shelf showModal={showModal} shelfName="Fiction" />
      </ShelvesUl>
    </>
  );
}

PropTypes.propTypes = {
  showModal: PropTypes.func.isRequired,
};
