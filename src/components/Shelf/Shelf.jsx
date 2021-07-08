import React from 'react';
import styled from 'styled-components';

const StyledLi = styled.li`
  width: 70%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  border: 1px solid ${(props) => props.theme.borderColor};
  background-color: ${(props) => props.theme.secondaryBg};
`;

export default function Shelf() {
  return <StyledLi />;
}
