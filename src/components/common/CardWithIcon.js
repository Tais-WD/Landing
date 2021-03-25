import React from "react";
import styled from "styled-components";

import { theme } from "../../style/theme.js";

const Wrapper = styled.div`
  margin: 36px;
  position: relative;
`;

const CardNoBorder = styled.div`
  width: 302px;
  height: 360px;
  @media (max-width: 720px) {
    height: 277px;
  }
`;

const ImageWrapper = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto;
  background: url("${(props) => props.image}") no-repeat;
`;

const Title = styled.h5`
  margin: 22px 0 0 0;
  font-size: ${theme.fontSize.sm2};
  font-weight: ${theme.fontWeight.medium};
  text-align: center;
  @media (max-width: 720px) {
    font-size: 22px;
  }
`;

const Text = styled.p`
  padding: 30px 0 0 0;
  font-size: ${theme.fontSize.sm1};
  font-weight: ${theme.fontWeight.regular};
  line-height: ${theme.fontLineHeight.small};
  text-align: center;
  @media (max-width: 720px) {
    padding: 25px 0 0 0;
    font-size: 18px;
    line-height: 21px;
  }
`;

const CardWithIcon = ({ title, text, image }) => {
  return (
    <CardNoBorder>
      <Wrapper>
        <ImageWrapper image={image} />
        <Title>{title}</Title>
        <Text>{text}</Text>
      </Wrapper>
    </CardNoBorder>
  );
};

export { CardWithIcon };
