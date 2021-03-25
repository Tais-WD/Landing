import React from "react";
import styled from "styled-components";

import { HashLink as Link } from "react-router-hash-link";
import { theme } from "../style/theme.js";
import BurgerNavigation from "./common/BurgerNavigation";

const Header = styled.header`
  padding: 34px 0;
  color: white;
  box-shadow: 0 2px 11px rgba(75, 86, 107, 0.15);
  @media (max-width: 655px) {
    padding: 20px 0;
  }
`;

const Container = styled.div`
  padding: 0 10px;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const LogoWrapper = styled.div`
  flex-basis: 275px;

  @media (max-width: ${theme.sizes.tablet}) {
    padding: 0 0 0 80px;
  }

  @media (max-width: 655px) {
    flex-basis: 197px;
  }

  @media (max-width: 450px) {
    padding: 0 0 0 60px;
  }
`;

const Logo = styled.img`
  width: 100%;

  @media (max-width: 655px) {
    width: 194px;
    padding: 8px 0 0 0;
  }
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-grow: 2;

  @media (max-width: ${theme.sizes.tablet}) {
    justify-content: space-around;
    flex-grow: 0;
  }
`;

const HorizontalNavigation = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-grow: 1;
  color: black;
  @media (max-width: ${theme.sizes.tablet}) {
    display: none;
  }
`;

const Item = styled.li`
  font-size: ${theme.fontSize.sm1};
  font-weight: ${theme.fontWeight.book};
  text-transform: uppercase;

  :active,
  :hover {
    font-weight: ${theme.fontWeight.medium};
  }
`;

const NavigationLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`;

const NumberWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 655px) {
    padding: 5px 0 0 0;
  }
`;

const LinkBasic = styled.a`
  text-decoration: none;
`;

const PhoneIcon = styled.img`
  height: 24px;
  width: 24px;
  padding: 0 4px 0 0;

  @media (max-width: 655px) {
    height: 18px;
    width: 18px;
  }
  @media (max-width: 450px) {
    height: 24px;
    width: 24px;
  }
`;

const Number = styled.span`
  font-size: ${theme.fontSize.sm1};
  font-weight: ${theme.fontWeight.ultraBold};
  cursor: pointer;

  @media (max-width: 655px) {
    font-size: 13px;
  }
  @media (max-width: 450px) {
    display: none;
  }
`;

const HeaderComponent = () => {
  return (
    <Header>
      <Container>
        <LogoWrapper>
          <a href="https://getdrinks.ru/">
            <Logo src="/img/icons/logo-black.svg" alt="logo" />
          </a>
        </LogoWrapper>
        <Navigation>
          <BurgerNavigation />
          <HorizontalNavigation>
            <Item>
              <NavigationLink to="/#how-to-make">Как оформить</NavigationLink>
            </Item>
            <Item>
              <NavigationLink to="/#benefits">преимущества</NavigationLink>
            </Item>
            <Item>
              <NavigationLink to="/#conditions">Условия</NavigationLink>
            </Item>
            <Item>
              <NavigationLink to="/#select-a-card">
                Выбрать карту
              </NavigationLink>
            </Item>
          </HorizontalNavigation>
          <LinkBasic href="tel:+7-926-930-30-00">
            <NumberWrapper>
              <PhoneIcon src="/img/icons/phone.svg" alt="phone icon" />
              <Number>+7 (926)930-30-00</Number>
            </NumberWrapper>
          </LinkBasic>
        </Navigation>
      </Container>
    </Header>
  );
};

export default HeaderComponent;
