import React from "react";
import styled from "styled-components";
import trashImage from "../../images/trash.svg";
import {
  formatCurrency,
  totalPriceItems,
} from "../Functions/secondoryFunction";

const TrashButton = styled.button`
  width: 24px;
  height: 24px;
  border-color: transparent;
  background-color: transparent;
  background-image: url(${trashImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
`;

const OrderItemStyled = styled.li`
  display: flex;
  margin: 15px 0px;
`;

const ItemName = styled.span`
  flex-grow: 1;
`;

const ItemPrice = styled.span`
  margin-left: 20px;
  margin-right: 10px;
  min-width: 65px;
  text-align: right;
`;

const ToppingsStyled = styled.div`
  margin-top: 15px;
  display: flex;
`;

const ToppingItem = styled.div`
  font-size: 14px;
  color: #9a9a9a;
  margin-right: 5px;
`;

export const OrderListItem = ({ order, setOrders, deleteItem }) => {
  const checkedToppings =
    order.topping &&
    order.topping
      .filter((item) => item.checked)
      .map((item) => item.name)
      .join(", ")
      .toLowerCase();
  return (
    <OrderItemStyled>
      <ItemName>
        {order.name} {order.choices}
        {checkedToppings && (
          <ToppingsStyled>
            <ToppingItem>
              {checkedToppings.length > 25
                ? checkedToppings.substring(0, 25) + "..."
                : checkedToppings}
            </ToppingItem>
          </ToppingsStyled>
        )}
      </ItemName>
      <span>{order.count}</span>
      <ItemPrice>{formatCurrency(totalPriceItems(order))}</ItemPrice>
      <TrashButton />
    </OrderItemStyled>
  );
};
