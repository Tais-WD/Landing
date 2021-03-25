import React from "react";
import styled from "styled-components";
import { theme } from "../../style/theme.js";

const Button = styled.input`
  text-align: center;
  vertical-align: middle;
  padding: 22px 70px;

  text-transform: uppercase;
  background-color: ${theme.color.white};
  color: ${theme.color.black};
  font-size: ${theme.fontSize.sm1};
  font-weight: ${theme.fontWeight.bold};
  border: 2px solid ${theme.color.green};
  box-shadow: 8px 10px 33px rgba(4, 241, 140, 0.4);
  border-radius: 4px;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 720px) {
    padding: 22px 56px;
  }
`;

const SubmitButton = () => {
  return <Button type="submit" value="Отправить" />;
};

export default SubmitButton;
