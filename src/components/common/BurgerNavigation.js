import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../../style/theme";

import { HashLink as Link } from "react-router-hash-link";

const NavigationLink = styled(Link)`
  text-decoration: none;

  cursor: pointer;
`;

const Item = styled.li`
  padding: 20px;

  font-weight: ${theme.fontWeight.book};
  text-transform: uppercase;
  font-size: ${theme.fontSize.sm1};
`;

const Ul = styled.ul`
  display: ${({ open }) => (open ? "flex" : "none")};
  flex-flow: column nowrap;
  flex-grow: 3;
  padding: 50px 300px 50px 20px;
  position: absolute;
  top: 102px;
  left: 0;

  @media (max-width: 655px) {
    top: 72px;
  }

  box-shadow: 15.894px 15.894px 31.7881px rgba(35, 37, 37, 0.15);
  z-index: 4;
  background-color: ${theme.color.white};
  list-style: none;

  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in-out;
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const StyledBurger = styled.div`
  width: 34px;
  height: 27px;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;

  position: absolute;
  top: 38px;
  left: 31px;

  @media (max-width: 655px) {
    top: 24px;
    left: 24px;
  }

  @media (min-width: 1201px) {
    display: none;
  }

  z-index: 10;
  div {
    z-index: 4;
    width: 27px;
    height: 2px;
    background-color: ${theme.color.black};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const BurgerNavigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <Ul open={open}>
        <Menu>
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
            <NavigationLink to="/#select-a-card">Выбрать карту</NavigationLink>
          </Item>
        </Menu>
      </Ul>
    </>
  );
};

export default BurgerNavigation;
