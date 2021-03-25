import React from "react";
import styled from "styled-components";

import { theme } from "../../style/theme.js";

const Card = styled.div`
  width: 302px;
  height: 360px;

  box-shadow: 50px 50px 70px -30px rgba(75, 86, 107, 0.2);
  border-radius: 20px;
  border: none;

  @media (max-width: 1000px) {
    width: 255px;
  }

  @media (max-width: 850px) {
    width: 350px;
    margin: 0 auto;
    box-shadow: 13px 12px 42px -30px rgba(75, 86, 107, 0.2),
      inset 0px 4px 32px rgba(75, 86, 107, 0.1);
    border: 0.01px solid white;
  }

  @media (max-width: 530px) {
    width: 260px;
    margin: 0 auto;
  }
`;

const Wrapper = styled.div`
  margin: 36px;
  position: relative;
`;

const BoxDecoration = styled.div`
  width: 101px;
  height: 101px;
  margin: 0 auto;
  z-index: 1;

  border: 7px solid #04f18c;
  border-radius: 20px;
`;

const Number = styled.h4`
  width: 76px;
  padding: 0 0 0 20px;
  z-index: 2;
  position: absolute;
  top: 49px;
  right: 82px;
  font-size: ${theme.fontSize.lg};
  font-weight: ${theme.fontWeight.bold};
  background-color: white;

  @media (max-width: 850px) {
    right: 70px;
  }
`;

const Text = styled.p`
  padding: 30px 0 0 0;
  font-size: ${theme.fontSize.sm1};
  font-weight: ${theme.fontWeight.regular};
  line-height: ${theme.fontLineHeight.small};
  text-align: center;
`;

const CardNumeric = ({ number, text }) => {
  return (
    <Card>
      <Wrapper>
        <BoxDecoration />
        <Number>{number}</Number>
        <Text>{text}</Text>
      </Wrapper>
    </Card>
  );
};

export { CardNumeric };
