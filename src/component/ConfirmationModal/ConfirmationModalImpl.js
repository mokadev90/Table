import styled from 'styled-components';
import PropTypes from 'prop-types';
import React from 'react';
import {
  CM_CENTER_CENTER,
  CM_TOP_CENTER,
  CM_TOP_LEFT,
  CM_TOP_RIGHT,
} from './index';

// These are private components

// Modal background layer - visible or invisible, but always floating above client's elements
const Model = styled.div`
  z-index: 10;
  display: ${({ show }) => (show ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.5);
`;

// Rendered popup - a positional demo confirmation box
const Container = styled.div`
  position: fixed;
  background: ${({ theme }) => theme.colors.primary.main};
  width: 33%;
  height: auto;

  top: ${({ openPos }) =>
    ({
      [CM_CENTER_CENTER]: '50%',
      [CM_TOP_LEFT]: '10%',
      [CM_TOP_CENTER]: '10%',
      [CM_TOP_RIGHT]: '10%',
    }[openPos])};

  left: ${({ openPos }) =>
    ({
      [CM_CENTER_CENTER]: '50%',
      [CM_TOP_LEFT]: '5%',
      [CM_TOP_CENTER]: '50%',
      [CM_TOP_RIGHT]: '95%',
    }[openPos])};

  transform: ${({ openPos }) =>
    ({
      [CM_CENTER_CENTER]: 'translate(-50%,-50%)',
      [CM_TOP_LEFT]: 'translate(0,0)',
      [CM_TOP_CENTER]: 'translate(-50%,0)',
      [CM_TOP_RIGHT]: 'translate(-100%,0)',
    }[openPos])};

  border-radius: 10px;
  padding: 0.75rem;
  color: ${({ theme }) => theme.colors.gray};
`;

const Header = styled.div`
  font-size: 2.4rem;
  color: ${({ theme }) => theme.colors.primary.lighter};
`;

const HBar = styled.div`
  width: 100%;
  height: 1px;
  border: solid 1px ${({ theme }) => theme.colors.gray};
  background-color: rgba(80, 80, 150, 0.4);
`;

const Slot = styled.div`
  font-size: 1.6rem;
  color: inherit;
  margin-top: 2rem;

  div .field {
    display: flex;
    justify-content: space-between;
  }
`;

export default function ConfirmationModalImpl(props) {
  const {
    handleClose, // renderProp fn returns true or false
    show, // boolean - visible/invisible
    headerText, // text
    detailText, // html / inner text
    openPos, // symbol for placement
  } = { ...props };

  const sendYes = () => handleClose(true);

  const sendNo = () => handleClose(false);

  return (
    <Model show={show}>
      <Container openPos={openPos}>
        <Header>{headerText}</Header>
        <HBar />
        <Slot>{detailText}</Slot>
      </Container>
    </Model>
  );
}
ConfirmationModalImpl.propTypes = {
  handleClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  headerText: PropTypes.string.isRequired,
  detailText: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  openPos: PropTypes.symbol.isRequired,
};
