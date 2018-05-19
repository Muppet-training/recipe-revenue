import React from 'react';
import { render } from 'react-dom';
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
      editing: false,
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
          ],
          cost: 5
        },

        { id: 2, name: 'Cake', cost: 8 }
      ],
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

  addRecipe() {
    const id = this.state.recipes.length + 1;
    console.log('newID: ', id);
    const newRecipe = {
      id: id
    };
    this.setState({ recipes: this.state.recipes.concat(newRecipe) });
    return id;
  }

  handleRecipeName(name, id) {
    console.log('ID: ', id);
    console.log('Name: ', name);
    const currentRecipes = this.state.recipes;
    console.log('Recipes: ', currentRecipes);

    currentRecipes[id] = name;
    this.setState({ recipes: currentRecipes });

    // const editRecipe = {
    //   id: id,
    //   name: name
    // };
    // this.setState(prevState => ({
    //   recipes: [...prevState.recipes, editRecipe]
    // }));
    // this.setState({ recipes: this.state.recipes.concat(newRecipe) });
  }

  handleAddRecipe(name) {
    const newRecipe = {
      id: this.state.recipes.length + 1,
      name: name
    };

    this.setState({ recipes: this.state.recipes.concat(newRecipe) });
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

  handleSubmit(e) {
    e.preventDefault();
    console.log('Name: ', e.target);
    console.log('Value: ', e.target);
    // this.setState({ [e.target.name]: e.target.value });
  }

  // handleRecipeName(e) {
  //   e.preventDefault();
  //   console.log('Name: ', e.target.name);
  //   console.log('Value: ', e.target.value);
  //   if (e.target.name.includes('[x]')) {
  //     const newRecipe = {
  //       id: this.state.recipes.length + 1,
  //       name: e.target.value
  //     };
  //     this.setState({ recipes: this.state.recipes.concat(newRecipe) });
  //   }
  //   // this.setState({ [e.target.name]: e.target.value });
  // }

  render() {
    return (
      <StyledDiv>
        <RecipeRevenue
          {...this.state}
          handleToggleClick={this.handleToggleClick.bind(this)}
          handleSubMenuClick={this.handleSubMenuClick.bind(this)}
          handleAddRecipe={this.handleAddRecipe.bind(this)}
          handleUpdate={this.handleUpdate.bind(this)}
          handleCalc={this.handleCalc.bind(this)}
          handleSubmit={this.handleSubmit.bind(this)}
          handleRecipeName={this.handleRecipeName.bind(this)}
          addRecipe={this.addRecipe.bind(this)}
        />
      </StyledDiv>
    );
  }
}

render(<App />, document.getElementById('root'));
