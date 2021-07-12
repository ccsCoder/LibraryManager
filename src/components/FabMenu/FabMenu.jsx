import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FabUL = styled.ul`
  position: absolute;
  right: 20px;
  bottom: 70px;
  background: ${(props) => props.theme.secondaryBg};
  color: white;
  list-style: none;
  border-radius: 4px;
  padding: 16px;
  box-sizing: border-box;
  tex-align: center;

  > li:hover {
    color: ${(props) => props.theme.text};
    cursor: pointer;
  }

  > li:not(:last-of-type) {
    margin-bottom: 4px;
  }
`;

const ADD_BOOK = 'Add Book';
const ADD_SHELF = 'Add Shelf';

function FabMenu({ visible }) {
  function onMenuItemSelected(event) {
    console.log(event.target.innerText);
  }

  if (!visible) return null;
  return (
    <FabUL role="menu">
      <li
        role="menuitem"
        onClick={onMenuItemSelected}
        onKeyUp={(e) => {
          if (e.key === 'Enter') onMenuItemSelected();
        }}
      >
        {ADD_BOOK}
      </li>
      <li
        role="menuitem"
        onClick={onMenuItemSelected}
        onKeyUp={(e) => {
          if (e.key === 'Enter') onMenuItemSelected();
        }}
      >
        {ADD_SHELF}
      </li>
    </FabUL>
  );
}

FabMenu.propTypes = {
  visible: PropTypes.bool,
};

FabMenu.defaultProps = {
  visible: false,
};

export default FabMenu;
