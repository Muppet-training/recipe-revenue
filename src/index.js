import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom';
import styled, { injectGlobal } from 'styled-components';
import RecipeRevenue from './RecipeRevenue';
import Home from './Home';
import RecipeList from './RecipeComponents/RecipeList/RecipeList';
import Navbar from './Menus/Navbar';
import MainMenu from './Menus/MainMenu';
import recipes from './recipesData';

injectGlobal`
  body{
    font-family: 'Montserrat' !important;
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
    input,
    textarea,
    select,
    button {
      font-weight: 400;
    }
    a{
      text-decoration: none;
      outline: 0;
    }
  }
`;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isRecipeDialogVisible: false,
      menuVisible: false,
      editingId: 0,
      recipes: recipes,
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
    console.log('State: ', this.state);
    this.setState({ menuVisible: !this.state.menuVisible });
  }

  handleAddRecipeButton(e) {
    this.setState({ editingId: 0 });
  }

  handleRecipeAdd(recipe) {
    const recipeCount = this.state.recipes.length;
    const recipeId = this.state.recipes[recipeCount - 1].id + 1;
    recipe.recipeToUpdate.id = recipeId;
    this.setState({
      editingId: recipeId,
      recipes: this.state.recipes.concat(recipe.recipeToUpdate)
    });
  }

  handleUpdateRecipe(recipe) {
    const recipes = this.state.recipes;
    for (var i = 0; i < recipes.length; i++) {
      if (recipes[i].id == recipe.recipeToUpdate.id) {
        recipes[i] = recipe.recipeToUpdate;
      }
    }
    this.setState({ recipes: recipes });
    return recipe;
  }

  handleRecipeEdit(recipe) {
    this.setState({
      editingId: recipe.id
    });
  }

  handleRecipeDelete(recipe) {
    const recipes = this.state.recipes;
    for (var i = 0; i < recipes.length; i++) {
      if (recipes[i].id == recipe.id) {
        recipes.splice(i, 1);
      }
    }
    this.setState({ recipes: recipes, editingId: 0 });
  }

  handleCalc(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const RecipeRevenueWrapper = styled.div`
      margin: 0px;
      padding: 0px;
      width: 100%;
      min-height: 100%;
      /* background-color: #f1f1f1; */
      background-color: #f7f7f7;
      position: absolute;
      top: 40px;
    `;

    const ContentSection = styled.div`
      margin: 0px;
      padding-left: ${this.state.menuVisible ? '220px' : '40px'};
      padding-right: 5px;
      padding-top: 40px;
      width: 100%;
      height: 100%;
      /* background-color: red; #f7f7f7; */
      box-sizing: border-box;
      overflow-x: hidden;
    `;

    function Child(props) {
      console.log('id:', props);
      return <p>HI</p>;
    }

    return (
      <BrowserRouter>
        <RecipeRevenueWrapper>
          <Navbar
            handleToggleClick={this.handleToggleClick.bind(this)}
            handleAddRecipeButton={this.handleAddRecipeButton.bind(this)}
          />
          {this.state.menuVisible ? (
            <MainMenu
              menuItems={this.state.menuItems}
              menuVisible={this.state.menuVisible}
              handleSubMenuClick={this.state.handleSubMenuClick}
            />
          ) : (
            ''
          )}
          <ContentSection menuVisible={this.props.menuVisible}>
            <Switch>
              <Route
                path="/recipes"
                exact
                render={props => (
                  <RecipeList
                    {...this.state}
                    onEditRecipe={this.handleRecipeEdit.bind(this)}
                    // ----Space
                    handleCalc={this.handleCalc.bind(this)}
                  />
                )}
              />
              {/* <Route path="/recipes/edit?:id" component={Child} /> */}

              <Route
                path="/recipe"
                render={props => (
                  <RecipeRevenue
                    {...this.state}
                    handleToggleClick={this.handleToggleClick.bind(this)}
                    handleAddRecipeButton={this.handleAddRecipeButton.bind(
                      this
                    )}
                    handleRecipeAdd={this.handleRecipeAdd.bind(this)}
                    handleUpdateRecipe={this.handleUpdateRecipe.bind(this)}
                    onDeleteRecipe={this.handleRecipeDelete.bind(this)}
                    onEditRecipe={this.handleRecipeEdit.bind(this)}
                    // ----Space
                    handleCalc={this.handleCalc.bind(this)}
                  />
                )}
              />
              <Route path="/" component={Home} />
            </Switch>
          </ContentSection>
        </RecipeRevenueWrapper>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
