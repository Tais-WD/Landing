import React from "react";
import styled from "styled-components";
import ReactSwipe from "react-swipe";

import { theme } from "../../style/theme.js";
import { CardNumeric } from "../common/Card";
import Button from "../common/Button.js";

const Section = styled.section`
  padding: 0 0 64px 0;
`;

const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  @media (max-width: ${theme.sizes.tablet}) {
    width: 100%;
  }
`;

const Title = styled.h3`
  font-size: ${theme.fontSize.md};
  font-weight: ${theme.fontWeight.medium};
  text-align: center;
  padding: 0 0 33px 0;
  @media (max-width: 720px) {
    font-size: ${theme.fontSize.sm2};
    padding: 0 0 17px 0;
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
  @media (max-width: 850px) {
    display: none;
  }
`;
const CardContainerMobile = styled.div`
  display: none;
  padding: 24px 0 0 0;
  @media (max-width: 850px) {
    width: 460px;
    display: block;
    margin: 0 auto;
    position: relative;
  }
  @media (max-width: 530px) {
    width: 310px;
  }
`;
const ArrowLeft = styled.div`
  background: url("/img/icons/arrow-left.svg") no-repeat;
  width: 20px;
  height: 25px;
  position: absolute;
  top: 170px;
  left: 0;
`;

const ArrowRight = styled.div`
  background: url("/img/icons/arrow-right.svg") no-repeat;
  position: absolute;
  width: 20px;
  height: 25px;
  top: 170px;
  right: 0;
`;

const Banner = styled.div`
  width: 100%;
`;

const CardWrapper = styled.div`
  width: 417px;
  height: 436px;
  margin: 0 auto;
  position: relative;
  @media (max-width: 850px) {
    width: 460px;
    display: block;
    margin: 0 auto;
    position: relative;
  }
  @media (max-width: 530px) {
    width: 89%;
  }
`;
const TitleSecondary = styled.h4`
  font-size: ${theme.fontSize.md};
  font-weight: ${theme.fontWeight.book};
  text-align: center;
  padding: 0 10px 33px 10px;
  @media (max-width: 720px) {
    font-size: ${theme.fontSize.sm2};
    font-weight: ${theme.fontWeight.medium};
  }
`;

const ButtonWrapper = styled.div`
  margin: 0 auto;
  width: 247px;
`;

const ProcessingSection = () => {
  let reactSwipeEl;
  return (
    <Section>
      <Container id="how-to-make">
        <TextWrapper>
          <Title>Оформить карту легко!</Title>
          <Text>
            Выбор подарка зачастую оказывается весьма непростым процессом,
            поэтому вручить подарочный сертификат на определенную сумму —
            беспроигрышное решение.
          </Text>
        </TextWrapper>
        <CardContainer>
          <CardNumeric
            number="1"
            text="Выберите дизайн и номинал подарочной карты, укажите электронный адрес получателя"
          />
          <CardNumeric
            number="2"
            text="Оформите карту и получите письмо с электронным сертификатом и кодом активации"
          />
          <CardNumeric
            number="3"
            text="С удовольствием дарите подарочную карту другу или близкому человеку"
          />
        </CardContainer>
        <CardContainerMobile>
          <ReactSwipe
            className="carousel"
            swipeOptions={{ continuous: false }}
            ref={(el) => (reactSwipeEl = el)}
          >
            <Banner>
              <CardWrapper>
                <CardNumeric
                  number="1"
                  text="Выберите дизайн и номинал подарочной карты, укажите электронный адрес получателя"
                />
              </CardWrapper>
            </Banner>
            <Banner>
              <CardWrapper>
                <CardNumeric
                  number="2"
                  text="Оформите карту и получите письмо с электронным сертификатом и кодом активации"
                />
              </CardWrapper>
            </Banner>
            <Banner>
              <CardWrapper>
                <CardNumeric
                  number="3"
                  text="С удовольствием дарите подарочную карту другу или близкому человеку"
                />
              </CardWrapper>
            </Banner>
          </ReactSwipe>
          <ArrowLeft onClick={() => reactSwipeEl.prev()} />
          <ArrowRight onClick={() => reactSwipeEl.next()} />
        </CardContainerMobile>
        <TitleSecondary>
          Электронная карта GetDrinks — идеальный подарок!
        </TitleSecondary>
        <ButtonWrapper>
          <Button>Выбрать карту</Button>
        </ButtonWrapper>
      </Container>
    </Section>
  );
};

export default ProcessingSection;
