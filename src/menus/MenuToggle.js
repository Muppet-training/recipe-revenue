import React from 'react';
import styled from 'styled-components';

const ButtonWrapperDiv = styled.div`
  background: darkorange;
  width: 40px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  background-color: orange;
  width: 30px;
  height: 30px;
  outline: 0px;
  border: none;
`;

export default function MenuToggle(props) {
  console.log('MenuToggle Props: ', props);
  return (
    <ButtonWrapperDiv onClick={props.handleToggleClick}>
      <Button onClick={props.handleToggleClick}>x</Button>
    </ButtonWrapperDiv>
  );
}
