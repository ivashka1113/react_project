import React from "react";
import styled from "styled-components";
import logoImg from "../../images/logo.svg";
import loginImg from "../../images/user.png";

const NavBarStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #299b01;
  color: white;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const H1 = styled.h1`
  font-size: 24px;
  margin-left: 15px;
`;

const ImgLogo = styled.img`
  width: 30px;
`;

const ButtonLogin = styled.button`
  cursor: pointer;
  font-weight: 700;
  color: white;
  text-decoration: none;
  padding: 0.8em 1em calc(0.1em + 3px);
  border: 0px;
  background: inherit;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
`;

const LogOut = styled.span`
  font-size: 20px;
  font-weight: 700px;
  cursor: pointer;
  margin-right: 30px;
`;

const Figure = styled.figure`
  margin: 0 30px;
`;

export const NavBar = ({ authentication, logIn, logOut }) => (
  <NavBarStyled>
    <Logo>
      <ImgLogo src={logoImg} alt="logo"></ImgLogo>
      <H1>Mr Donald's</H1>
    </Logo>
    {authentication ? (
      <User>
        <Figure>
          <ImgLogo src={loginImg} alt={authentication.displayName}></ImgLogo>
          <figcaption>{authentication.displayName}</figcaption>
        </Figure>
        <LogOut title="Выйти" onClick={logOut}>
          X
        </LogOut>
      </User>
    ) : (
      <ButtonLogin onClick={logIn}>
        <Figure>
          <ImgLogo src={loginImg} alt="logo"></ImgLogo>
          <figcaption>Войти</figcaption>
        </Figure>
      </ButtonLogin>
    )}
  </NavBarStyled>
);
