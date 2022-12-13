import React from "react";
import styled from "styled-components";

const ItemStyled = styled.li`
  position: relative;
  width: 400px;
  height: 155px;
  background-image: ${({ img }) => `url(${img})`};
  background-position: center;
  background-size: cover;
  margin-top: 30px;
  margin-right: 30px;
  padding: 15px;
  color: white;
  z-index: 1;
  font-size: 30px;
  transition: all 1s;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: -1;
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    box-shadow: inset 0 0 50px 30px rgba(0, 0, 0, 1);
  }
`;

const ListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const ListItem = ({ itemList, setOpenItem }) => (
  <ListStyled>
    {itemList.map((item) => (
      <ItemStyled
        key={item.id}
        img={item.img}
        onClick={() => setOpenItem(item)}
      >
        <p>{item.name}</p>
        <p>
          {item.price.toLocaleString("ru-RU", {
            style: "currency",
            currency: "RUB",
          })}
        </p>
      </ItemStyled>
    ))}
  </ListStyled>
);
