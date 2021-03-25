import React from "react";
import styled, { css } from "styled-components";

import { theme } from "../../style/theme.js";
import SubmitButton from "../common/SubmitButton";

const Section = styled.section`
  padding: 100px 0;
  width: 1200px;
  margin: 0 auto;
  position: relative;
  @media (max-width: ${theme.sizes.tablet}) {
    width: 840px;
  }
  @media (max-width: 720px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 407px;
  padding: 0 20px;
  @media (max-width: 472px) {
    width: 83%;
  }
`;

const TextContainer = styled.div`
  padding: 0 20px;
`;

const Title = styled.span`
  font-size: ${theme.fontSize.md};
  font-weight: ${theme.fontWeight.medium};
  @media (max-width: 720px) {
    font-size: ${theme.fontSize.sm2};
  }
`;

const Text = styled.p`
  font-size: ${theme.fontSize.sm2};
  font-weight: ${theme.fontWeight.regular};
  padding: 21px 0 34px 0;
  @media (max-width: 720px) {
    font-size: ${theme.fontSize.sm1};
  }
`;

const inputStyles = css`
  width: 100%;
  padding: 13px 0 13px 20px;
  border: 2px solid ${theme.color.greyLight};
  border-radius: 4px;
  ::placeholder {
    font-size: ${theme.fontSize.sm1};
    color: ${theme.color.greyLight};
  }
`;
const Input = styled.input`
  ${inputStyles};
  margin: 0 0 34px 0;
`;

const TextArea = styled.textarea`
  ${inputStyles};
  height: 241px;
  margin: 0 0 54px 0;
`;

const FormSection = () => {
  return (
    <Section>
      <TextContainer>
        <Title>Остались вопросы?</Title>
        <Text>Напишите нам и мы ответим в ближайшее время.</Text>
      </TextContainer>
      <Container>
        <form>
          <Input type="text" placeholder="Имя" />
          <br />
          <Input type="text" placeholder="Электронная почта" />
          <br />
          <TextArea placeholder="Ваш вопрос" />
          <br />
          <SubmitButton />
        </form>
      </Container>
    </Section>
  );
};

export default FormSection;
