import React from "react";
import styled from "styled-components";
import { theme } from "../style/theme";

const FooterComponent = styled.div`
  background: ${theme.color.grey};
  color: ${theme.color.darkGrey};
`;

const Wrapper = styled.div`
  padding: 104px 0;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  width: 1200px;
  justify-content: space-evenly;
  @media (max-width: ${theme.sizes.tablet}) {
    padding: 140px 20px;
    width: 840px;
    justify-content: space-between;
    flex-wrap: nowrap;
  }
  @media (max-width: 880px) {
    width: 80%;
    justify-content: center;
    flex-wrap: wrap;
  }
  @media (max-width: 460px) {
    width: 100%;
    padding: 140px 0;
  }
`;

const LogoWrapper = styled.div`
  padding: 0 40px 0 0;
  width: 300px;
  @media (max-width: ${theme.sizes.tablet}) {
    padding: 0 0 2rem 0;
    width: 290px;
  }
`;

const Title = styled.h4`
  font-size: ${theme.fontSize.sm2};
  color: ${theme.color.darkGrey};
  font-weight: ${theme.fontWeight.bold};
  @media (max-width: ${theme.sizes.tablet}) {
    padding: 1.5rem 0 0 0;
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: row;
  flex-basis: 1;
  justify-content: space-evenly;
  flex-wrap: wrap;
  @media (max-width: ${theme.sizes.tablet}) {
    width: 300px;
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 275px;
  @media (max-width: ${theme.sizes.mobileL}) {
    padding: 1rem 0 0 0;
  }
`;

const Hyperlink = styled.a`
  font-size: ${theme.fontSize.sm1};
  color: ${theme.color.darkGrey};
  padding: 10px 0;
  text-decoration: none;
  cursor: pointer;
  font-weight: ${theme.fontWeight.regular};
  :hover {
    text-decoration: underline;
    color: ${theme.color.black};
  }
`;

const ContactsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 275px;
  @media (max-width: ${theme.sizes.mobileL}) {
    padding: 1rem 0 0 0;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0 0 0;
  @media (max-width: ${theme.sizes.tablet}) {
    padding: 2rem 0 0 0;
  }
  @media (max-width: ${theme.sizes.mobileL}) {
    padding: 1rem 0 0 0;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100px;
  justify-content: space-between;
  padding: 20px 0 0 0;
`;

const IconImage = styled.img``;

const Footer = () => {
  return (
    <FooterComponent>
      <Wrapper>
        <Item>
          <LogoWrapper>
            <Hyperlink href="#">
              <IconImage
                src="/img/icons/logo-grey.png"
                alt="логотип Getdrinks"
              />
            </Hyperlink>
          </LogoWrapper>
          <LinkWrapper>
            <Hyperlink href="#">
              Реквизиты
            </Hyperlink>
            <Hyperlink href="#">
              Политика в отношении обработки персональных данных{" "}
            </Hyperlink>
            <Hyperlink href="#">
              Правила онлайн платформы Getdrinks.ru
            </Hyperlink>
          </LinkWrapper>
        </Item>
        <Item>
          <ContactsWrapper>
            <Title>Свяжитесь с нами:</Title>
            <ContactInfo>
              <Hyperlink href="mailto:example@mail.ru">
              example@mail.ru
              </Hyperlink>
              <Hyperlink href="tel:+79269303000">+0 (000) 930-30-00</Hyperlink>
            </ContactInfo>
          </ContactsWrapper>
          <ContactsWrapper>
            <Title>Оставайтесь на связи ;)</Title>
            <IconWrapper>
              <Hyperlink href="#">
                <IconImage
                  src="/img/icons/instagram.svg"
                  alt="иконка facebook"
                />
              </Hyperlink>
              <Hyperlink href="#">
                <IconImage
                  src="/img/icons/facebook.svg"
                  alt="иконка facebook"
                />
              </Hyperlink>
            </IconWrapper>
          </ContactsWrapper>
        </Item>
      </Wrapper>
    </FooterComponent>
  );
};

export default Footer;
