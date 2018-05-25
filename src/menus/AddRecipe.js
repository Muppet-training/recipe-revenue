import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ButtonWrapperDiv = styled.div`
  /* background: darkorange; */
  width: auto;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AddRecipeButton = styled.button`
  background-color: darkorange;
  font-family: 'Montserrat';
  color: #fff;
  width: auto;
  font-size: 16px;
  height: 30px;
  outline: 0px;
  border: none;
  outline: 0;
  border-radius: 2px;
  cursor: pointer;
`;
/* <AddRecipeButton onClick={props.handleAddRecipeButton}>+ Recipe</AddRecipeButton> */

export default function MenuToggle(props) {
  console.log('Add Recipe Props: ', props);
  const Button = () => (
    <Link to="/recipe">
      <AddRecipeButton onClick={props.handleAddRecipeButton}>
        + Recipe
      </AddRecipeButton>
    </Link>
  );
  return (
    <ButtonWrapperDiv onClick={props.handleAddRecipeButton}>
      <Button />
    </ButtonWrapperDiv>
  );
}
