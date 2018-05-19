import React from 'react';
import RecipeListItem from './RecipeListItem';
import styled from 'styled-components';
// import "./RecipeList.css";

const RecipeUl = styled.ul`
  list-style-type: none;
  margin-top: 100px;

  > * {
    padding: 0.5rem;
  }
`;

export default function RecipeList(props) {
  console.log('RecipeList - Passed Props: ', props);
  const total =
    Number(props.input1) + Number(props.input2) + Number(props.input3);
  return (
    <div>
      <RecipeUl id="recipe">
        {props.recipes.map(r => (
          <li key={r.id}>
            <RecipeListItem {...r} />
          </li>
        ))}
      </RecipeUl>
      <hr />
      <h3>{props.txt}</h3>
      <hr />
      <input type="text" onChange={props.handleUpdate} />
      <hr />
      <h3>{total}</h3>
      <hr />
      <input
        type="text"
        name="input1"
        defaultValue={props.input1}
        onChange={props.handleCalc}
      />
      <input
        type="text"
        name="input2"
        defaultValue={props.input2}
        onChange={props.handleCalc}
      />
      <input
        type="text"
        name="input3"
        defaultValue={props.input3}
        onChange={props.handleCalc}
      />
    </div>
  );
}
