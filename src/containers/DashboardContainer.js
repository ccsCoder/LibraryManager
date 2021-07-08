import React from 'react';
import styled from 'styled-components';
import Search from '../components/Search';

const StyledMain = styled.main`
  height: 100%;
  width: 100%;
`;

const StyledHeader = styled.header`
  width: 100%;
  text-align: center;
`;

const CenteredSection = styled.section`
  display: flex;
  justify-content: center;
`;

export default function DashboardContainer() {
  return (
    <StyledMain>
      <StyledHeader>
        <h1>Kitab Online</h1>
        <CenteredSection>
          <Search />
        </CenteredSection>
      </StyledHeader>
    </StyledMain>
  );
}
