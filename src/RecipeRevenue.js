import React from 'react';
import styled from 'styled-components';
import RecipeList from './RecipeComponents/RecipeList/RecipeList';
import Navbar from './menus/Navbar';
import MainMenu from './menus/MainMenu';
import RecipeDetails from './RecipeComponents/RecipeDetails';

import DetailsForm from './RecipeComponents/DetailsForm';
import DF from './RecipeComponents/DF';

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

const PushDownDiv = styled.div`
  margin-top: 100px;
`;

class RecipeForm extends React.Component {
  onChange(e) {
    e.preventDefault();
    console.log('Changing text: ', this.refs.name.value);
  }

  onSubmit(e) {
    e.preventDefault();
    console.log('Submit text: ', this.refs.name.value);
    const name = this.refs.name.value.trim();
    if (!name) {
      alert('Please Enter Recipe Name');
      return;
    }
    this.props.onRecipeAdd(name);
    this.refs.name.value = '';
  }

  render() {
    return (
      <PushDownDiv>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div>
            <label>Recipe Name</label>
            <input type="text" ref="name" onChange={this.onChange.bind(this)} />
          </div>
        </form>
      </PushDownDiv>
    );
  }
}

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
          {/* <RecipeDetails onRecipeAdd={this.props.handleAddRecipe} /> */}
          <RecipeForm />
          <DF {...this.props} />
          <RecipeList {...this.props} />
        </ContentSection>
      </RecipeRevenueWrapper>
    );
  }
}
