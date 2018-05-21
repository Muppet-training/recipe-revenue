import React from 'react';

export default function RecipeListItem(props) {
  function editRecipe(recipe) {
    return () => {
      console.log('Recipe to edit: ', recipe);
      props.onEditRecipe(recipe);
    };
  }
  console.log('Recipe List Item: ', props);
  return (
    <div onClick={editRecipe(props)}>
      <hr />
      <div>Recipe ID: {props.id}</div>
      <div>Recipe Name: {props.name}</div>
      <div>Recipe Details:</div>
      <ul>
        <li>Serves: {props.serves}</li>
        <li>Est Sales: {props.estSales}</li>
        <li>Staff Time: {props.staffTime}</li>
        <li>Cooking Time: {props.cookingTime}</li>
        <li>Internal: {props.internal}</li>
        <li>Wastage: {props.wastage}</li>
      </ul>
    </div>
  );
}
