/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  background: ${({ theme: { button } }) => button.background};
  color: ${(props) => props.theme.buttonTextColor};
  border: ${(props) => props.theme.button.border};
  height: ${(props) => props.theme.button.minHeight};
  max-width: ${(props) => props.theme.button.width};
  flex: 1;
  cursor: pointer;
  border-radius: 4px;
`;

const FabButton = styled(StyledButton)`
  border-radius: 50%;
  height: 40px;
  width: 40px;
  z-index: 5;
  background-color: ${(props) => props.theme.buttonTextColor};
  color: black;
  position: fixed;
  bottom: 40px;
  right: 40px;
  font-size: 24px;
`;

export default function ActionButton({ label, fab, onClicked }) {
  return (
    <>
      {fab && (
        <FabButton onClick={onClicked} aria-label={label}>
          <span>+</span>
        </FabButton>
      )}
      {!fab && <StyledButton onClick={onClicked}> {label} </StyledButton>}
    </>
  );
}

PropTypes.propTypes = {
  label: PropTypes.string.isRequired,
  onClicked: PropTypes.func,
  fab: PropTypes.bool,
};

PropTypes.defaultProps = {
  onClicked: () => {},
  fab: false,
};
