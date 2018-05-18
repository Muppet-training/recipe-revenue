import React from 'react';
import styled from 'styled-components';
import MenuToggle from './MenuToggle.js';

const Title = styled.h1`
  color: #fff;
  text-align: left;
  font-size: 22px;
  margin: 0px;
  padding: 0px;
  margin-left: 30px;
  line-height: 50px;
  display: flex;
`;

const NavbarNav = styled.nav`
  background-color: #212121;
  height: 50px;
  position: fixed;
  top: 0;
  width: 100vw;
  padding: 0;
  margin: 0;
  display: flex;
  justify: center;
  z-index: 2;
`;
// display: table;

export default function Navbar(props) {
  // console.log("Navbar Props: ", props);
  return (
    <NavbarNav>
      <MenuToggle {...props} />
      <Title>Recipe Revenue</Title>
    </NavbarNav>
  );
}
