"use strict";

import styled from "styled-components";
import React from "react";

const OrderButtonStyled = styled.div`
  width: 250px;
  height: 60px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #299b01;
  color: white;
  border: 0;
  transition: all 0.2s linear;
  font-size: 18px;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
      rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
      rgba(0, 0, 0, 0.09) 0px 32px 16px;
    transform: scale(1.05);
  }
`;

export const OrderButton = ({ onClickHandler }) => {
  return (
    <OrderButtonStyled onClick={onClickHandler}>Оплатить</OrderButtonStyled>
  );
};
