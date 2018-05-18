import React from 'react';
import styled from 'styled-components';
import RecipeList from './RecipeComponents/RecipeList/RecipeList';
import Navbar from './menus/Navbar';
import MainMenu from './menus/MainMenu';
import RecipeDetails from './RecipeComponents/RecipeDetails';

const RecipeRevenueWrapper = styled.div`
  margin: 0px;
  padding: 0px;
  width: 100%;
  min-height: 100%;
  background-color: #f1f1f1;
  position: absolute;
  top: 50px;
`;

const ContentSection = styled.div`
  margin: 0px;
  padding-left: ${props => (props.menuVisible ? '220px' : '40px')};
  padding-right: 5px;
  padding-top: 40px;
  width: 100%;
  height: 100%;
  background-color: #f7f7f7;
  box-sizing: border-box;
`;

export default class RecipeRevenue extends React.Component {
  render() {
    console.log('RecipeRevenue - Passed Props: ', this.props);
    return (
      <RecipeRevenueWrapper>
        <Navbar handleToggleClick={this.props.handleToggleClick} />
        {this.props.menuVisible ? (
          <MainMenu
            menuItems={this.props.menuItems}
            menuVisible={this.props.menuVisible}
            handleSubMenuClick={this.props.handleSubMenuClick}
          />
        ) : (
          ''
        )}
        <ContentSection menuVisible={this.props.menuVisible}>
          <RecipeDetails />
          <RecipeList {...this.props} />
        </ContentSection>
      </RecipeRevenueWrapper>
    );
  }
}
