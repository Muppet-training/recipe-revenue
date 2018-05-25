import React from 'react';
import { withRouter } from 'react-router-dom';
// this also works with react-router-native

export default function RecipeListItem(props) {
  const ListItem = withRouter(({ history }) => (
    <div
      onClick={() => {
        history.push('/recipe');
        // function_two();
        editRecipe(props);
      }}
    >
      <hr />
      <div>Recipe ID: {props.id}</div>
      <div>Recipe Name: {props.name}</div>
      <div>Recipe Details:</div>
      <ul>
        <li>Serves: {props.serves}</li>
        <li>Price: {props.price}</li>
        <li>Est Sales: {props.estSales}</li>
        <li>Staff Time: {props.staffTime}</li>
        <li>Cooking Time: {props.cookingTime}</li>
        <li>Internal: {props.internal}</li>
        <li>Wastage: {props.wastage}</li>
      </ul>
    </div>
  ));
  function editRecipe(recipe) {
    console.log('Recipe to edit: ', recipe);
    props.onEditRecipe(recipe);
  }
  console.log('Recipe List Item: ', props);
  return <ListItem />;
}
