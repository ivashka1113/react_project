import React from "react";
import styled from "styled-components";
import { ModalButton } from "./ModalButton";

const ModalInfo = styled.div`
  display: flex;
  font-family: Pacifico, sans-serif;
  margin: 20px 53px 20px 37px;
  justify-content: space-between;
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

export const ModalItem = ({ openItem, setOpenItem, orders, setOrders }) => {
  const closeModal = (e) => {
    if (e.target.id === "overlay") {
      setOpenItem(null);
    }
  };

  const order = {
    ...openItem,
  };

  const addToOrder = () => {
    setOrders([...orders, order]);
    setOpenItem(null);
  };

  return (
    <Overlay id="overlay" onClick={closeModal}>
      <ModalStyled>
        <Banner img={openItem.img} />
        <ModalInfo>
          <p>{openItem.name}</p>
          <p>{openItem.price}</p>
        </ModalInfo>
        <ModalButton onClickHandler={addToOrder} />
      </ModalStyled>
    </Overlay>
  );
};
