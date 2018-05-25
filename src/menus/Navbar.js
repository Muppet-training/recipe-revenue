import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import MenuToggle from './MenuToggle';
import AddRecipe from './AddRecipe';

const NavbarNav = styled.nav`
  display: grid;
  max-width: 100%;
  text-align: center;
  grid-template-columns: 40px 150px auto 50px;
  grid-gap: 20px;
  grid-template-areas: 'toggle title button-area icon';

  background-color: #212121;
  height: 40px;
  position: fixed;
  top: 0;
  width: 100vw;
  padding: 0;
  margin: 0;

  justify: center;
  z-index: 2;
`;

const Button = styled.button`
  background-color: orange;
  width: 30px;
  height: 30px;
  outline: 0px;
  border: none;
  cursor: pointer;
`;

const Title = styled.h1`
  grid-area: title;
  color: #fff;
  text-align: left;
  font-size: 18px;
  margin: 0px;
  padding: 0px;
  margin-left: 0px;
  line-height: 40px;
  display: flex;
`;

const Toggle = styled.div`
  grid-area: toggle;
  background: darkorange;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Buttons = styled.div`
  grid-area: button-area;
  align-self: right;
  justify-self: right;
`;

export default function Navbar(props) {
  // console.log("Navbar Props: ", props);
  return (
    <NavbarNav>
      <Toggle onClick={props.handleToggleClick}>
        <Button onClick={props.handleToggleClick}>x</Button>
      </Toggle>
      <Link to="/">
        <Title>Recipe Revenue</Title>
      </Link>
      <Buttons>
        <AddRecipe {...props} />
      </Buttons>
    </NavbarNav>
  );
}
