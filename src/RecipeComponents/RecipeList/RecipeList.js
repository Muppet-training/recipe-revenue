import React from "react";
import RecipeListItem from "./RecipeListItem";
import styled from 'styled-components';
// import "./RecipeList.css";

const RecipeUl = styled.ul`
  list-style-type: none;
  display: flex;
  margin-top: 100px;
  
  > li {
    flex: 1;

  > li:first-child {
    color: #aaa;
  
  > * {
    padding: 0.5rem;
  }
`



export default function RecipeList(props) {
  console.log("RecipeList - Props: ", props);
  const total = Number(props.input1) + Number(props.input2) + Number(props.input3);
  return (
    <div>
      <RecipeUl>
        <li>
          <div>Recipe Name</div>
          <div>Ingridient cost</div>
        </li>
        {
          props.recipes.map(r => (
            <li key={r.id}>
              <RecipeListItem {...r} />
            </li>
          ))
        }
        <li>
          <button onClick={props.handleClick}>+ Recipe</button>
        </li>
      </RecipeUl>
      <hr />
      <h3>{props.txt}</h3>
      <hr />
      <input type="text" onChange={props.handleUpdate}/>
      <hr />
      <h3>{total}</h3>
      <hr />
      <input type="text" name="input1" defaultValue={props.input1} onChange={props.handleCalc} />
      <input type="text" name="input2" defaultValue={props.input2} onChange={props.handleCalc} />
      <input type="text" name="input3" defaultValue={props.input3} onChange={props.handleCalc} />
    </div>
  );
}
