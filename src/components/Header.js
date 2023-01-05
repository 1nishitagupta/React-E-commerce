import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from '../assets/images/logo.png'
import Nav from "./Nav";

const Header = () => {

  return (
    <MainHeader>
      <NavLink to="/">
        <span>
          <img src={logo} alt="my logo img" />
        </span>
      </NavLink>
      <Nav/>
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  img {
    height: 7rem;
  }
`;
export default Header;
