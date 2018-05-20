import React from 'react';

export default function RecipeListItem(props) {
  function editRecipe(recipe) {
    return () => {
      console.log('Recipe to edit: ', recipe);
      props.onEditRecipe(recipe);
    };
  }
  return (
    <div onClick={editRecipe(props)}>
      <hr />
      <div>Recipe ID: {props.id}</div>
      <div>Recipe Name: {props.name}</div>

      {props.details ? (
        <div>
          <div>Recipe Details:</div>
          <ul>
            {props.details.map((d, index) => (
              <li style={{ padding: '2px' }} key={index}>
                {d.name}: {d.amount}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
