import React from "react";
import styled from "styled-components";

import { theme } from "../../style/theme.js";
import Button from "../common/Button.js";

const Intro = styled.section`
  max-width: 1900px;
  margin: 0 auto;
  padding: 0 0 78px 0;
  background-image: url("/img/decoration/background.svg");
  background-repeat: no-repeat;
  background-position: -105px -258px;
  color: white;
  @media (min-width: ${theme.sizes.tablet}) {
    padding: 100px 0 120px 0;
    background-position: 408px -192px;
  }
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  @media (min-width: ${theme.sizes.tablet}) {
    width: 1200px;
    margin: 0 auto;
    padding: 0 0 0 10px;
  }
`;

const DecorationWrapper = styled.div`
  width: 550px;
  position: relative;
  margin: 0 auto;
  @media (min-width: ${theme.sizes.tablet}) {
    position: absolute;
    right: 0;
    top: -86px;
  }
  @media (max-width: 550px) {
    width: 320px;
  }
`;

const Cards = styled.img`
  width: 550px;
  height: 550px;
  @media (max-width: 550px) {
    width: 320px;
    height: 320px;
  }
`;

const TextWrapper = styled.div`
  padding: 0 10px;
  width: 700px;
  @media (max-width: 1200px) {
    padding: 0 10px;
    width: 92%;
  }
`;

const Title = styled.h2`
  padding: 0;
  font-size: ${theme.fontSize.lg};
  font-weight: ${theme.fontWeight.bold};
  text-transform: uppercase;
  @media (max-width: 1200px) {
    font-size: 50px;
  }
  @media (max-width: 650px) {
    font-size: 32px;
  }
  @media (min-width: ${theme.sizes.tablet}) {
    padding: 30px 0 0 0;
  }
`;

const Subtitle = styled.h4`
  padding: 46px 0 54px 0;
  font-size: ${theme.fontSize.md};
  font-weight: ${theme.fontWeight.book};
  @media (max-width: 1200px) {
    font-size: 25px;
  }
  @media (max-width: 650px) {
    font-size: 18px;
    padding: 18px 0 25px 0;
  }
`;

const IntroSection = () => {
  return (
    <Intro>
      <Container id="select-a-card">
        <DecorationWrapper>
          <Cards
            src="/img/decoration/cards.png"
            alt="изображение подарочных карт"
          />
        </DecorationWrapper>
        <TextWrapper>
          <Title>
            Не знаете,
            <br />
            что подарить?
          </Title>
          <Subtitle>
            Электронная
            <br />
            подарочная карта — идеальный подарок!
          </Subtitle>
          <Button>Выбрать карту</Button>
        </TextWrapper>
      </Container>
    </Intro>
  );
};

export default IntroSection;
