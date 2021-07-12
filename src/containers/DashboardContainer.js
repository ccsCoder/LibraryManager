import React, { useState } from 'react';
import styled from 'styled-components';
import ActionButton from '../components/ActionButton';
import FabMenu from '../components/FabMenu';
import Search from '../components/Search';
import ShelvesContainer from './ShelvesContainer';

const StyledMain = styled.main`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto;
  place-items: center;
  gap: 48px;
`;

const StyledHeader = styled.header`
  width: 100%;
  text-align: center;
`;

const CenteredSection = styled.section`
  display: flex;
  justify-content: center;
  width: 60%;
`;

export default function DashboardContainer() {
  const [fabMenuVisible, setFabMenuVisible] = useState(false);
  return (
    <>
      <StyledHeader>
        <h1>Kitab Online</h1>
      </StyledHeader>
      <StyledMain>
        <CenteredSection>
          <Search />
        </CenteredSection>
        <ShelvesContainer />
        <ActionButton
          fab
          label="Add a new book"
          onClicked={() => setFabMenuVisible(true)}
        />
        <FabMenu visible={fabMenuVisible} />
      </StyledMain>
    </>
  );
}
