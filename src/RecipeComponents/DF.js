import React from 'react';
import styled from 'styled-components';

const GridLayout = styled.div`
  display: grid;
  max-width: 600px;
  text-align: left;
  grid-template-columns: repeat(6, 1fr);
  /* grid-auto-rows: minmax(100px, auto); */
  grid-gap: 20px;
  grid-template-areas:
    'header header header header header header '
    'details details details details details details';
  @media screen and (min-width: 760px) {
    grid-template-areas:
      'header header header header header header '
      'details details details details details details';
  }
`;

const Form = styled.form`
  grid-area: details;
  section:last-child {
    margin-bottom: 0px;
  }
`;

const InputSection = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 50px 50px;
  grid-template-areas:
    'label'
    'input';
  margin-bottom: 10px;
  width: 100%;

  @media screen and (min-width: 580px) {
    grid-template-columns: 270px auto;
    grid-template-rows: 50px;
    grid-template-areas: 'label input';
  }
`;

const Label = styled.div`
  grid-area: label;
  font-size: 18px;
  line-height: 50px;
  font-weight: 400;
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

const SelectList = styled.select`
  grid-area: input;
  font-size: 18px;
  line-height: 50px;
  outline: 0px;
  border: none;
  border-bottom: 1px solid #cccccc;
  background-color: #f7f7f7;
  padding-left: 20px;
  select:invalid {
    color: gray;
  }
`;

export default function DF(props) {
  // console.log('Props DF.. ', props.editRecipeValues);

  function onChange(e) {
    console.log('Changing Text.. ', e.currentTarget.value);
    props.changeRecipeName(e.currentTarget.value);
  }

  function formSubmit(e) {
    e.preventDefault();
    console.log('Submit Form.. ', e.currentTarget.name.value);
    const name = e.currentTarget.name.value.trim();
    if (!name) {
      alert('Please enter a recipe name');
      return;
    }

    if (props.editingId) {
      // console.log('Editing', props.editingId);
      const updatedRecipeName = {
        id: props.editingId,
        name: name
      };
      props.onRecipeNameUpdate(updatedRecipeName);
    } else {
      props.onRecipeNameAdd(name);
    }

    e.currentTarget.name.value = '';
  }
  return (
    <GridLayout>
      <Form onSubmit={formSubmit}>
        <InputSection>
          <Label>Recipe Name</Label>
          <InputText
            type="text"
            name="name"
            placeholder="Name of this recipe version"
            value={props.editRecipeValues}
            onChange={onChange}
          />
        </InputSection>
        <button type="submit" hidden />
      </Form>
    </GridLayout>
  );
}
