import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ActionButton from '../ActionButton';

const CurtainDiv = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  z-index: 10;
  background-color: black;
  opacity: 0.95;
  display: grid;
  place-items: center;
`;
/* eslint-disable react/prop-types */

const ModalContainer = styled.div`
  background-color: ${(props) => props.theme.secondaryBg};
  max-width: 80%;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const StyledHeaderText = styled.h5`
  margin: 0 auto;
`;

const ActionsFooter = styled.footer`
  box-sizing: border-box;
  padding: 8px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const ContentSection = styled.section`
  color: ${(props) => props.theme.secondaryText};
  font-size: 14px;
`;

export default function Modal({ isVisible, children, hideModal }) {
  return (
    <>
      {isVisible && (
        <CurtainDiv>
          <ModalContainer role="dialog" aria-modal="true">
            <header>
              <StyledHeaderText>Modal Title</StyledHeaderText>
            </header>
            <ContentSection>{children}</ContentSection>
            <ActionsFooter>
              <ActionButton
                compact
                label="Cancel"
                onClicked={() => hideModal(false)}
              />
              <ActionButton compact label="Save" />
            </ActionsFooter>
          </ModalContainer>
        </CurtainDiv>
      )}
    </>
  );
}

PropTypes.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  hideModal: PropTypes.func.isRequired,
};
