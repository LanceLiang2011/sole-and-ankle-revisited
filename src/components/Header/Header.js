import React from "react";
import styled from "styled-components/macro";

import { COLORS, QUERIES, WEIGHTS } from "../../constants";
import Logo from "../Logo";
import Icon from "../Icon";
import UnstyledButton from "../UnstyledButton";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <LaptopNav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </LaptopNav>
        <MobileAction>
          <UnstyledButton>
            <Icon id="shopping-bag" />
          </UnstyledButton>
          <UnstyledButton>
            <Icon id="search" />
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu((cur) => true)}>
            <Icon id="menu" />
          </UnstyledButton>
        </MobileAction>
        <Filler />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  @media (${QUERIES.tabletAndSmaller}) {
    border-top: 4px solid ${COLORS.gray[900]};
    justify-content: space-between;
    align-items: center;
    padding-left: 16px;
    padding-right: 16px;
    overflow: auto;
  }

  @media (${QUERIES.phoneAndSmaller}) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const LaptopNav = styled.nav`
  display: flex;
  gap: clamp(1rem, 9.2vw - 4.5rem, 3.5rem);
  margin: 0px 48px;
  @media (${QUERIES.tabletAndSmaller}) {
    display: none;
  }
`;

const MobileAction = styled.div`
  display: none;

  @media (${QUERIES.tabletAndSmaller}) {
    display: flex;
    gap: 32px;
  }

  @media (${QUERIES.phoneAndSmaller}) {
    gap: 16px;
  }
`;

const Side = styled.div`
  flex: 1;
  @media (${QUERIES.tabletAndSmaller}) {
    flex: revert;
  }
`;

const Filler = styled(Side)`
  flex: 1;
  @media (${QUERIES.tabletAndSmaller}) {
    display: none;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
