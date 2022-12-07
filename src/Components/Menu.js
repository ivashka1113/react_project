"use strict";

import React from "react";
import styled from "styled-components";
import dbMenu from "./DBMenu";
import { ListItem } from "./listItem";
import Banner from "../images/banner.png";

const MenuStyled = styled.main`
  background-color: #ccc;
  margin-top: 80px;
`;

const SectionMenu = styled.section`
  padding: 30px;
`;

const BannerMenu = styled.div`
  height: 250px;
  width: 100%;
  background-image: url(${Banner});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Menu = () => (
  <MenuStyled>
    <BannerMenu />
    <SectionMenu>
      <h2>Бургеры</h2>
      <ListItem itemList={dbMenu.burger} />
    </SectionMenu>
    <SectionMenu>
      <h2>Закуски и напитки</h2>
      <ListItem itemList={dbMenu.other} />
    </SectionMenu>
  </MenuStyled>
);
