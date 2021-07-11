/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  box-sizing: border-box;
  background-color: transparent;
  color: white;
  border: ${(props) => (props.textButton ? 'none' : props.theme.button.border)};
  height: ${(props) => (props.compact ? 'auto' : '25px')};
  cursor: pointer;
  border-radius: 4px;
  font-size: 10px;
  text-transform: uppercase;
  margin-right: 4px;

  :hover {
    color: ${(props) => props.theme.text};
  }
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

export default function ActionButton({
  label,
  fab,
  textButton,
  compact,
  onClicked,
}) {
  return (
    <>
      {fab && (
        <FabButton
          compact={compact}
          onClick={() => {
            onClicked();
          }}
          aria-label={label}
        >
          <span>+</span>
        </FabButton>
      )}
      {!fab && (
        <StyledButton
          textButton={textButton}
          compact={compact}
          onClick={() => {
            if (onClicked) onClicked();
          }}
        >
          {' '}
          {label}{' '}
        </StyledButton>
      )}
    </>
  );
}

PropTypes.propTypes = {
  label: PropTypes.string.isRequired,
  onClicked: PropTypes.func,
  compact: PropTypes.bool,
  fab: PropTypes.bool,
  textButton: PropTypes.bool,
};

PropTypes.defaultProps = {
  onClicked: () => {},
  fab: false,
  compact: false,
  textButton: false,
};
