import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

const Item = styled.div`
  cursor: pointer;
`;

export default function RecipeListItem(props) {
  const ListItem = withRouter(({ history }) => (
    <Item
      onClick={() => {
        history.push({
          pathname: '/recipe/edit/' + props.name
        });
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
    </Item>
  ));
  function editRecipe(recipe) {
    console.log('Recipe to edit: ', recipe);
    props.onEditRecipe(recipe);
  }
  console.log('Recipe List Item: ', props);
  return <ListItem />;
}
