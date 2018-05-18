import React from "react";
import styled from "styled-components";

const MenuItemUl = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
  width: 100%;
  text-align: left;
`;

const MenuItemli = styled.li` 
  background-color: #f1f1f1;
  margin: 0;
  width: 100%;
  text-align: left;
  list-style-type: none;
  line-height: 50px;
  border-top: 1px solid #e5e5e5; 
  border-bottom: 1px solid #f1f1f1; 
  &:hover {
    cursor: pointer;
    border-bottom: 1px solid #f6891f;
  }
`;

const SubMenuItemli = MenuItemli.extend`
  line-height: 35px;
  border-top: 1px solid #f1f1f1;  
  &:last-child {
    padding-bottom: 10px
    &:hover {
      border-bottom: 1px solid #f6891f;
    }
  }
`;

const MenuItemDiv = styled.div`
  margin: 0px 20px;
  
`;

const SubMenuItemDiv = MenuItemDiv.extend`
  margin: 0px 30px;
`;

export default function SubMainMenu(props) {
  <MenuItemUl>
    {props.item.subName.map(subItem => (
      <SubMenuItemli>
        <SubMenuItemDiv>- {subItem.name}</SubMenuItemDiv>{" "}
      </SubMenuItemli>
    ))}
  </MenuItemUl>
}