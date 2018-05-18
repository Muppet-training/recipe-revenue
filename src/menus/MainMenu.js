import React from "react";
import styled from "styled-components";
import MainMenuItem from "./MainMenuItem.js";
import SubMainMenuItem from "./SubMainMenuItem.js";

const MenuDiv = styled.div`
  background-color: #f1f1f1;
  border-right: 1px solid #bababa;
  height: 100vh;
  width: 180px;
  position: fixed;
  top: 50px;
  padding: 0;
  margin: 0;
  list: none;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: block;
  align: center;
  -webkit-box-packjustify: center;
  -webkit-justify: center;
  -ms-flex-packjustify: center;
  justify: center;
  webkit-box-shadow: 0px 8px 4px 4px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 0px 8px 4px 4px rgba(0, 0, 0, 0.4);
  box-shadow: 0px 0px 8px 4px rgba(126, 126, 126, 0.4);
  z-index: 1;
`;

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

export default function MainMenu(props) {
  console.log("MainMenu Props: ", props);
  return (
    <MenuDiv>
      {props.menuItems ? (
        <MenuItemUl>
          {props.menuItems.map(item => (
            <div key={item.name}>
              <MenuItemli>
                <MenuItemDiv onClick={props.handleSubMenuClick}>
                  {item.name}
                </MenuItemDiv>
              </MenuItemli>
              {item.subName && item.subMenuVisible ? (
                <SubMainMenuItem props={item} />
              ) : (
                ""
              )}
            </div>
          ))}
        </MenuItemUl>
      ) : (
        ""
      )}
    </MenuDiv>
  );
}

// <MenuItemUl>
//   {props.menuItems.map(item => (
//     <MainMenuItem key={item.name} menuName={item} />
//   ))}
// </MenuItemUl>
