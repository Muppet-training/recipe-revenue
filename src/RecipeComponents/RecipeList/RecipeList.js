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

const Form = styled.form`
  grid-area: details;
  section:last-child {
    margin-bottom: 0px;
  }
`;

const InputText = styled.input`
  grid-area: input;
  font-size: 18px;
  line-height: 50px;
  outline: 0px;
  border: none;
  border-bottom: 1px solid #cccccc;
  background-color: #f7f7f7;
  padding-left: 20px;
  &::placeholder {
    color: #ccc;
  }
`;

const Delete = styled.button`
  color: red;
  margin-top: 1rem;
`;

export default function RecipeList(props) {
  console.log('RecipeList - Passed Props: ', props);
  const total =
    Number(props.input1) + Number(props.input2) + Number(props.input3);

  function onDelete(recipe) {
    return () => {
      props.onDeleteRecipe(recipe);
      console.log('Recipe to delete: ', recipe);
    };
  }

  return (
    <div>
      <RecipeUl id="recipe">
        {props.recipes.map(r => (
          <li key={r.id} className={r.id}>
            <RecipeListItem {...props} {...r} />
            <Delete href="#" onClick={onDelete(r)}>
              Delete Recipe
            </Delete>
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
      <Form onSubmit={props.handleSubmit}>
        <InputText
          type="text"
          name="input1"
          defaultValue={props.input1}
          onChange={props.handleCalc}
        />
        <InputText
          type="text"
          name="input2"
          defaultValue={props.input2}
          onChange={props.handleCalc}
        />
        <InputText
          type="text"
          name="input3"
          defaultValue={props.input3}
          onChange={props.handleCalc}
        />
        <button type="submit" hidden />
      </Form>
    </div>
  );
}
