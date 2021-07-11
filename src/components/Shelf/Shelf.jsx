import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ActionButton from '../ActionButton/ActionButton';

const StyledLi = styled.li`
  position: relative;
  width: 70%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 48px;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 5px;
  background-color: ${(props) => props.theme.secondaryBg};
`;

const ShelfNameDiv = styled.div`
  color: ${(props) => props.theme.secondaryText};
`;

const ShelfActionsContainer = styled(ShelfNameDiv)`
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  transform: translateY(-100%);
`;

// eslint-disable-next-line react/prop-types
export default function Shelf({ shelfName }) {
  return (
    <StyledLi>
      <ShelfActionsContainer>
        <ShelfNameDiv>{shelfName}</ShelfNameDiv>
        <ActionButton textButton label="Delete this shelf" />
      </ShelfActionsContainer>
    </StyledLi>
  );
}

PropTypes.propTypes = {
  shelfName: PropTypes.string.isRequired,
  showModal: PropTypes.func.isRequired,
};
