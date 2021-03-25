import React from "react";
import styled from "styled-components";
import { theme } from "../../style/theme.js";

const ButtonComponent = styled.button`
  text-align: center;
  vertical-align: middle;
  padding: 16px 46px;

  text-transform: uppercase;
  background-color: ${theme.color.green};
  color: ${theme.color.black};
  font-size: ${theme.fontSize.sm1};
  font-weight: ${theme.fontWeight.bold};
  border: 1px solid ${theme.color.green};
  box-shadow: 8px 10px 33px rgba(4, 241, 140, 0.4);
  border-radius: 4px;

  &:hover {
    cursor: pointer;
  }
`;

const Button = ({ children }) => {
  return <ButtonComponent>{children}</ButtonComponent>;
};

export default Button;
