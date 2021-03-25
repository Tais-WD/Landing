import React from "react";
import styled from "styled-components";

import { NavLink } from "react-router-dom";
import { theme } from "../../style/theme.js";
import { CardWithIcon } from "../common/CardWithIcon";

const Section = styled.section`
  max-width: 1900px;
  padding: 100px 0 200px 0;
  position: relative;
  overflow: hidden;
  @media (max-width: 720px) {
    padding: 100px 0 0 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h3`
  font-size: ${theme.fontSize.md};
  font-weight: ${theme.fontWeight.medium};
  text-align: center;
  padding: 0 0 33px 0;
  @media (max-width: 720px) {
    font-size: ${theme.fontSize.sm2};
    font-weight: ${theme.fontWeight.medium};
  }
`;

const Text = styled.p`
  font-size: ${theme.fontSize.sm2};
  font-weight: ${theme.fontWeight.regular};
  line-height: ${theme.fontLineHeight.large};
  text-align: center;
  @media (max-width: 720px) {
    font-size: ${theme.fontSize.sm1};
    line-height: 34px;
  }
`;

const TextWrapper = styled.div`
  width: 840px;
  margin: 0 auto;
  @media (max-width: 850px) {
    width: 96%;
    padding: 0 10px;
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 24px 0 87px 0;
  @media (max-width: 720px) {
    flex-direction: column;
    align-items: center;
    padding: 24px 0;
  }
`;

const DecorationWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  @media (max-width: 720px) {
    display: none;
  }
`;

const DecorationImage = styled.img``;

const TermsSection = () => {
  return (
    <Section>
      <Container id="conditions">
        <TextWrapper>
          <Title>Условия использования</Title>
          <Text>
            Ознакомьтесь с правилами использования подарочной карты GetDrinks
          </Text>
        </TextWrapper>
        <CardContainer>
          <CardWithIcon
            image="/img/icons/clock.svg"
            title="Срок действия"
            text="Карта действует 1 год с момента покупки"
          />
          <CardWithIcon
            image="/img/icons/exchange.svg"
            title="Обмен и возврат"
            text="После покупки подарочная карта не подлежит возврату"
          />
          <CardWithIcon
            image="/img/icons/money.svg"
            title="Номинал карт"
            text="Пополнение карты от 500 до 15000 рублей"
          />
        </CardContainer>
        <NavLink to="/conditions">
          <Text>Полные условия</Text>
        </NavLink>
      </Container>
      <DecorationWrapper>
        <DecorationImage
          src="/img/decoration/circle-decoration.png"
          alt="декоративный элемент, зеленые точки"
        />
      </DecorationWrapper>
    </Section>
  );
};

export default TermsSection;
