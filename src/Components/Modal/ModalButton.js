import styled from "styled-components";
import React from "react";

const ModalButtonStyled = styled.button`
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
  margin-top: 20px;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
      rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
      rgba(0, 0, 0, 0.09) 0px 32px 16px;
    transform: scale(1.05);
  }
  &:disabled {
    color: #bbb;
    background-color: #ccc;
    border-color: #aaa;
  }
`;

export const ModalButton = ({ onClickHandler, disabled, name }) => {
  return (
    <ModalButtonStyled onClick={onClickHandler} disabled={disabled}>
      {name}
    </ModalButtonStyled>
  );
};
