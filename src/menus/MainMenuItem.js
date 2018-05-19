import React from 'react';
import styled from 'styled-components';

const MenuItemli = styled.li`
  background-color: #f1f1f1;
  margin: 0;
  width: 100%;
  text-align: left;
  list-style-type: none;
  line-height: 50px;
  margin-top: 1px
  &:hover {
    color: #212121;
    background-color: #e5e5e5;
  }
`;

const MenuItemDiv = styled.div`
  margin: 0px 20px;
  border-bottom: 1px solid #e5e5e5;
  &:hover {
    border-bottom: 1px solid #f6891f;
  }
`;

const SubMenuItemUl = styled.ul`
  padding: 0;
  margin: 0px, 20px;
  list: none;
  width: 100%;
  text-align: left;
`;

const SubMenuItemli = styled.li`
  background-color: #f1f1f1;
  margin: 0;
  width: 100%;
  text-align: left;
  list-style-type: none;
  line-height: 35px;
  margin-top: 1px
  &:hover {
    color: #212121;
    background-color: #e5e5e5;
  }
`;

export default function MainMenuItem(props) {
  console.log(props);
  return (
    <MenuItemli>
      <MenuItemDiv>{props.menuName.name}</MenuItemDiv>
    </MenuItemli>
  );
}
