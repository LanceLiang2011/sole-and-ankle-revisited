/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";
import { COLORS, WEIGHTS } from "../../constants";

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content>
        <CloseButton onClick={onDismiss}>
          <Icon id="close" />
        </CloseButton>
        <Filler />
        <Nav>
          <a href="/sale">Sale</a>
          <a href="/new">New&nbsp;Releases</a>
          <a href="/men">Men</a>
          <a href="/women">Women</a>
          <a href="/kids">Kids</a>
          <a href="/collections">Collections</a>
        </Nav>
        <Footer>
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </Footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  background-color: hsla(220 5% 40% / 0.8);

  /* flexbox */
  display: flex;
  justify-content: flex-end;
`;
const Content = styled(DialogContent)`
  background: white;
  height: 100%;
  width: 300px;
  /* flex container */
  display: flex;
  flex-direction: column;
  padding: 32px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;

  a {
    color: ${COLORS.gray[900]};
    font-weight: ${WEIGHTS.medium};
    text-decoration: none;
    font-size: 1.125rem;
    text-transform: uppercase;
  }

  a:first-of-type {
    color: purple;
  }
`;

const Footer = styled.footer`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  a {
    color: ${COLORS.gray[700]};
    font-weight: ${WEIGHTS.normal};
    text-decoration: none;
    font-size: 0.875;
    text-transform: capitalize;
  }
`;
const Filler = styled.div`
  flex: 1;
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 26px;
  right: 16px;
`;

export default MobileMenu;
