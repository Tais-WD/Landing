import React from "react";
import ReactSwipe from "react-swipe";
import styled from "styled-components";
import { theme } from "../../style/theme.js";

const SectionContainer = styled.section`
  background-color: ${theme.color.green};
`;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1900px;
  width: 100%;
  background: url("/img/banner/background-desktop.png") no-repeat;
  @media (max-width: 1647px) {
    background-position: -149px 0;
  }
  @media (max-width: 1647px) {
    background-position: -349px 0;
  }
  @media (max-width: ${theme.sizes.tablet}) {
    background: url("/img/banner/background-mobile.png") ${theme.color.green}
      no-repeat;
    background-position: -32px 0;
  }
  @media (max-width: 600px) {
    background-position: -202px -133px;
  }
`;

const DecorationWrapper = styled.div`
  position: absolute;
  right: -37px;
  @media (max-width: ${theme.sizes.tablet}) {
    width: 530px;
    position: relative;
    right: 0;
    top: -74px;
  }

  @media (max-width: 600px) {
    width: 320px;
    top: -46px;
  }
`;

const BannerWrapper = styled.div`
  width: 100%;
`;

const Banner = styled.div`
  display: flex;
  width: 1200px;
  margin: 0 auto;
  position: relative;
  @media (max-width: ${theme.sizes.tablet}) {
    width: 715px;
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 730px) {
    width: 100%;
  }
`;

const TextWrapper = styled.div`
  padding: 150px 0 50px 20px;

  @media (max-width: ${theme.sizes.tablet}) {
    padding: 71px 0 0 0;
    width: 530px;
  }
  @media (max-width: 600px) {
    width: 95%;
  }
`;

const CardImage = styled.img`
  display: block;
  width: 500px;
  @media (max-width: 600px) {
    width: 320px;
    margin: 0 auto;
  }
`;

const Title = styled.h4`
  width: 715px;
  font-size: ${theme.fontSize.md};
  font-weight: ${theme.fontWeight.medium};
  @media (max-width: ${theme.sizes.tablet}) {
    font-size: ${theme.fontSize.sm2};
    width: 530px;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Text = styled.p`
  padding: 33px 0 0 0;
  width: 715px;

  font-size: ${theme.fontSize.sm2};
  font-weight: ${theme.fontWeight.regular};
  line-height: ${theme.fontLineHeight.large};
  @media (max-width: ${theme.sizes.tablet}) {
    font-size: ${theme.fontSize.sm1};
    line-height: 34px;
    padding: 20px 0 0 0;
    width: 530px;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const ArrowWrapper = styled.div`
  margin: 62px 0 0 0;
  display: flex;
  @media (max-width: ${theme.sizes.tablet}) {
    display: none;
  }
`;

const ArrowLeft = styled.div`
  background: url("/img/icons/arrow-left.svg") no-repeat;
  width: 40px;
  height: 40px;
`;

const ArrowLeftMobile = styled(ArrowLeft)`
  display: none;
  @media (max-width: ${theme.sizes.tablet}) {
    position: absolute;
    top: 226px;
    left: 23px;
    display: block;
  }
  @media (max-width: 600px) {
    top: 147px;
    left: 10px;
  }
`;
const ArrowRight = styled.div`
  background: url("/img/icons/arrow-right.svg") no-repeat;
  width: 40px;
  height: 40px;
`;

const ArrowRightMobile = styled(ArrowRight)`
  display: none;
  @media (max-width: ${theme.sizes.tablet}) {
    display: block;
    position: absolute;
    top: 207px;
    right: 63px;
  }
  @media (max-width: 600px) {
    top: 138px;
    right: -1px;
  }
`;

const BannerSection = () => {
  let reactSwipeEl;
  return (
    <SectionContainer>
      <Wrapper id="benefits">
        <ReactSwipe
          className="carousel"
          swipeOptions={{ continuous: false }}
          ref={(el) => (reactSwipeEl = el)}
        >
          <BannerWrapper>
            <Banner>
              <TextWrapper>
                <Title>Преимущества нашей электронной карты:</Title>
                <Text>
                  Теперь Вы можете отправить моментальный подарок друзьям и
                  близким, не выходя из дома!
                </Text>
                <ArrowWrapper>
                  <ArrowLeft onClick={() => reactSwipeEl.prev()} />
                  <ArrowRight onClick={() => reactSwipeEl.next()} />
                </ArrowWrapper>
              </TextWrapper>
              <DecorationWrapper>
                <CardImage src="/img/banner/Card1.png" />

                <ArrowLeftMobile onClick={() => reactSwipeEl.prev()} />
                <ArrowRightMobile onClick={() => reactSwipeEl.next()} />
              </DecorationWrapper>
            </Banner>
          </BannerWrapper>
          <BannerWrapper>
            <Banner>
              <TextWrapper>
                <Title>Преимущества нашей электронной карты:</Title>
                <Text>
                  Мы предлагаем несколько вариантов подарочных карт с различными
                  депозитами, удобными для вас.
                </Text>
                <ArrowWrapper>
                  <ArrowLeft onClick={() => reactSwipeEl.prev()} />
                  <ArrowRight onClick={() => reactSwipeEl.next()} />
                </ArrowWrapper>
              </TextWrapper>
              <DecorationWrapper>
                <CardImage src="/img/banner/Card2.png" />

                <ArrowLeftMobile onClick={() => reactSwipeEl.prev()} />
                <ArrowRightMobile onClick={() => reactSwipeEl.next()} />
              </DecorationWrapper>
            </Banner>
          </BannerWrapper>
          <BannerWrapper>
            <Banner>
              <TextWrapper>
                <Title>Преимущества нашей электронной карты:</Title>
                <Text>
                  Сделайте запоминающийся подарок, и предоставьте получателю
                  возможность лично выбрать то, что действительно нужно!
                </Text>
                <ArrowWrapper>
                  <ArrowLeft onClick={() => reactSwipeEl.prev()} />
                  <ArrowRight onClick={() => reactSwipeEl.next()} />
                </ArrowWrapper>
              </TextWrapper>
              <DecorationWrapper>
                <CardImage src="/img/banner/Card1.png" />

                <ArrowLeftMobile onClick={() => reactSwipeEl.prev()} />
                <ArrowRightMobile onClick={() => reactSwipeEl.next()} />
              </DecorationWrapper>
            </Banner>
          </BannerWrapper>
        </ReactSwipe>
      </Wrapper>
    </SectionContainer>
  );
};

export default BannerSection;
