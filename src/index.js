import React from 'react';
import ReactDOM from 'react-dom';
// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Switch,
//   Redirect
// } from 'react-router-dom';
import styled from 'styled-components';
import RecipeRevenue from './RecipeRevenue';

const StyledDiv = styled.div`
  font-family: 'Montserrat';
  font-weight: 300;
  color: #212121;
  font-size: 14px;
  text-align: left;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 400;
  }
`;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isRecipeDialogVisible: false,
      menuVisible: false,
      editingId: 0,
      recipes: [
        {
          id: 1,
          name: 'Pie',
          details: [
            { name: 'serves', amount: 6 },
            { name: 'estSales', amount: 10 },
            { name: 'staffTime', amount: 20 },
            { name: 'cookingTime', amount: 50 },
            { name: 'internal', amount: 0 },
            { name: 'wastage', amount: 5 }
          ]
        },
        {
          id: 2,
          name: 'Cake',
          details: [
            { name: 'serves', amount: 6 },
            { name: 'estSales', amount: 6 },
            { name: 'staffTime', amount: 6 },
            { name: 'cookingTime', amount: 6 },
            { name: 'internal', amount: 6 },
            { name: 'wastage', amount: 6 }
          ]
        }
      ],
      editRecipeValues: '',
      menuItems: [
        { name: 'Overview' },
        {
          name: 'Recipes',
          subName: [
            { name: 'Details' },
            { name: 'Ingredients' },
            { name: 'Results' }
          ],
          subMenuVisible: false
        },
        { name: 'Staff' },
        { name: 'Fixed Costs' },
        { name: 'Ingredients' },
        { name: 'Packaging' },
        { name: 'Accounts' }
      ],
      colours: [
        { text: '#212121' },
        { bgMain: '#f7f7f7' },
        { bgMenu: '#f1f1f1' },
        { orange: '#F6891F' },
        { hlGrey: '#e5e5e5' }
      ],
      txt: 'This is text from the state',
      input1: 0,
      input2: 0,
      input3: 0
    };
  }

  handleToggleClick(e) {
    this.setState({ menuVisible: !this.state.menuVisible });
  }

  handleSubMenuClick(e) {
    console.log('Menu Item Clicked: ', e.target.innerText);
  }

  handleUpdate(e) {
    console.log('Hi');
    this.setState({ txt: e.target.value });
  }

  handleCalc(e) {
    console.log('Name: ', e.target.name);
    console.log('Value: ', e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  }

  handleRecipeNameAdd(name) {
    // console.log('STATE: ', this.state);
    const recipeId = this.state.recipes.length + 1;
    const newRecipeName = {
      id: recipeId,
      name: name
    };
    this.setState({
      editingId: recipeId,
      recipes: this.state.recipes.concat(newRecipeName)
    });
  }

  handleRecipeDelete(recipe) {
    console.log('Delete this recipe: ', recipe);
    const recipes = this.state.recipes;
    for (var i = 0; i < recipes.length; i++) {
      if (recipes[i].id == recipe.id) {
        recipes.splice(i, 1);
      }
    }
    this.setState({ recipes: recipes });
  }

  handleRecipeEdit(recipe) {
    console.log('Editing this recipe ID: ', recipe.id);
    this.setState({
      editingId: recipe.id,
      editRecipeValues: recipe.name
    });
  }

  handleChangeRecipeName(recipeName) {
    // console.log('Editing this recipe ID: ', recipeName);
    this.setState({
      editRecipeValues: recipeName
    });
  }

  handleRecipeUpdate(recipe) {
    console.log('Updated Recipe Name: ', recipe);
    const recipes = this.state.recipes;
    for (var i = 0; i < recipes.length; i++) {
      if (recipes[i].id == recipe.id) {
        // recipes.splice(i, 1);
        recipes[i].name = recipe.name;
        // this.setState({ recipes: recipes }); todos[i].text = todo.text.
      }
    }
    // recipes.push(recipe);
    this.setState({ recipes: recipes });
  }

  // handleGetEditRecipeValues(this.state.){

  // }

  render() {
    return (
      <StyledDiv>
        <RecipeRevenue
          {...this.state}
          handleToggleClick={this.handleToggleClick.bind(this)}
          handleSubMenuClick={this.handleSubMenuClick.bind(this)}
          handleUpdate={this.handleUpdate.bind(this)}
          handleCalc={this.handleCalc.bind(this)}
          onRecipeNameAdd={this.handleRecipeNameAdd.bind(this)}
          onDeleteRecipe={this.handleRecipeDelete.bind(this)}
          onEditRecipe={this.handleRecipeEdit.bind(this)}
          changeRecipeName={this.handleChangeRecipeName.bind(this)}
          onRecipeNameUpdate={this.handleRecipeUpdate.bind(this)}
        />
      </StyledDiv>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
