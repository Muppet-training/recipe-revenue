import React from 'react';

export default function RecipeListItem(props) {
  return (
    <div>
      <hr />
      <div>Recipe Name: {props.name}</div>
      <div>Recipe Cost: {props.cost}</div>

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
