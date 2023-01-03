import React from "react";
import styled from "styled-components";
import { OrderListItem } from "./OrderListItem";
import {
  formatCurrency,
  totalPriceItems,
} from "../Functions/secondoryFunction";

const OrderStyled = styled.section`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  top: 80px;
  left: 0;
  background-color: white;
  min-width: 380px;
  height: calc(100% - 80px);
  box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.25);
  padding: 20px;
`;

const OrderTitle = styled.h2`
  text-align: center;
  margin-bottom: 30px;
`;

const OrderContent = styled.div`
  flex-grow: 1;
`;

const OrderList = styled.ul``;

const Total = styled.div`
  display: flex;
  margin: 0 35px 30px;

  & span:first-child {
    flex-grow: 1;
  }
`;

const TotalPrice = styled.span`
  text-align: right;
  min-width: 65px;
  margin-left: 20px;
`;

const EmptyList = styled.p`
  text-align: center;
`;

const OrderButton = styled.div`
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
  cursor: pointer;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
      rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
      rgba(0, 0, 0, 0.09) 0px 32px 16px;
    transform: scale(1.05);
  }
`;

export const Order = ({
  orders,
  setOrders,
  setOpenItem,
  authentication,
  logIn,
}) => {
  const deleteItem = (index) => {
    const newOrders = [...orders];

    newOrders.splice(index, 1);

    setOrders(newOrders);
  };

  const total = orders.reduce((result, order) => {
    return (result = totalPriceItems(order) + +result);
  }, 0);

  const totalCount = orders.reduce((result, order) => {
    return (result = order.count + +result);
  }, 0);

  return (
    <OrderStyled>
      <OrderTitle>Ваш заказ:</OrderTitle>
      <OrderContent>
        {orders.length ? (
          <OrderList>
            {orders.map((order, index) => (
              <OrderListItem
                order={order}
                deleteItem={deleteItem}
                key={index}
                index={index}
                setOpenItem={setOpenItem}
              />
            ))}
          </OrderList>
        ) : (
          <EmptyList>Список заказов пуст</EmptyList>
        )}
      </OrderContent>
      <Total>
        <span>Итого</span>
        <span>{totalCount}</span>
        <TotalPrice>{formatCurrency(total)}</TotalPrice>
      </Total>
      <OrderButton
        onClick={() => (!authentication ? logIn() : console.log(orders))}
      >
        Оформить
      </OrderButton>
    </OrderStyled>
  );
};
