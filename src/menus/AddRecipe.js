import React from 'react';
import styled from 'styled-components';

const ButtonWrapperDiv = styled.div`
  /* background: darkorange; */
  width: auto;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
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
`;

export default function MenuToggle(props) {
  console.log('MenuToggle Props: ', props);
  return (
    <ButtonWrapperDiv onClick={props.handleAddRecipeButton}>
      <Button onClick={props.handleAddRecipeButton}>+ Recipe</Button>
    </ButtonWrapperDiv>
  );
}
