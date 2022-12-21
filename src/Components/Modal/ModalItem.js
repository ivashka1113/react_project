import React from "react";
import styled from "styled-components";
import { ModalButton } from "./ModalButton";
import { CountItem } from "./CountItem";
import { useCount } from "../Hooks/useCount";
import {
  formatCurrency,
  totalPriceItems,
} from "../Functions/secondoryFunction";
import { Topings } from "./Topings";
import { Choices } from "./Choices";
import { useToppings } from "../Hooks/useToppings";
import { useChoices } from "../Hooks/useChoices";

const ModalInfo = styled.div`
  display: flex;
  font-family: Pacifico, sans-serif;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  padding: 20px 53px 20px 37px;
`;

const Overlay = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 20;
`;

const ModalStyled = styled.div`
  background-color: white;
  width: 600px;
  height: 600px;
  position: relative;
`;

const Banner = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-position: center;
  margin-bottom: 20px;
`;

const TotalPriceItem = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ModalItem = ({ openItem, setOpenItem, orders, setOrders }) => {
  const counter = useCount();
  const toppings = useToppings(openItem);
  const choices = useChoices(openItem);

  const closeModal = (e) => {
    if (e.target.id === "overlay") {
      setOpenItem(null);
    }
  };

  const order = {
    ...openItem,
    count: counter.count,
    topping: toppings.toppings,
    choices: choices.choice,
  };

  const addToOrder = () => {
    setOrders([...orders, order]);
    setOpenItem(null);
  };

  return (
    <Overlay id="overlay" onClick={closeModal}>
      <ModalStyled>
        <Banner img={openItem.img} />
        <Wrapper>
          <ModalInfo>
            <p>{openItem.name}</p>
            <p>{formatCurrency(openItem.price)}</p>
          </ModalInfo>
          <CountItem {...counter} />
          {openItem.toppings && <Topings {...toppings} />}
          {openItem.choices && <Choices {...choices} openItem={openItem} />}
          <TotalPriceItem>
            <span>Стоимость:</span>
            <span>{formatCurrency(totalPriceItems(order))}</span>
          </TotalPriceItem>
          <ModalButton
            onClickHandler={addToOrder}
            disabled={order.choices && typeof order.choices !== "string"}
          />
        </Wrapper>
      </ModalStyled>
    </Overlay>
  );
};
