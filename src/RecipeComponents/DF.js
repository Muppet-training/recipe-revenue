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
  console.log('DF - Passed Props: ', props);

  function checkRecipe(recipeId) {
    if (recipeId.includes('[x]')) {
      const newId = props.addRecipe();
      return newId;
    }
  }

  function onChange(e) {
    e.preventDefault();
    console.log('Changing text: ', e.target.value);
    console.log('Changing text: ', e.target.name);
    // const name = e.target.value;

    const id = checkRecipe(e.target.name);

    console.log('New ID: ', id);

    // if (e.target.name.includes('[x]')) {
    //   const newRecipe = {
    //     id: this.state.recipes.length + 1,
    //     name: e.target.value
    //   };
    //   props.handleRecipeName(name);
    // }
    // props.handleRecipeName(name);
  }

  function onSubmit(e) {
    e.preventDefault();
    console.log('Submit text: ', e.target);
    const name = e.target.value.trim();
    if (!name) {
      alert('Please Enter Recipe Name');
      return;
    }
    // this.props.onRecipeAdd(name);
    props.handleRecipeName(name);
    this.refs.name.value = '';
  }

  return (
    <GridLayout>
      <Form onSubmit={props.handleSubmit}>
        <InputSection>
          <Label>Amount 1</Label>
          <InputText
            type="text"
            name="input1"
            defaultValue={props.input1}
            onChange={props.handleCalc}
          />
        </InputSection>
        <InputSection>
          <Label>Amount 2</Label>
          <InputText
            type="text"
            name="input2"
            defaultValue={props.input2}
            onChange={props.handleCalc}
          />
        </InputSection>
        <InputSection>
          <Label>Amount 3</Label>
          <InputText
            type="text"
            name="input3"
            defaultValue={props.input3}
            onChange={props.handleCalc}
          />
        </InputSection>
        <InputSection>
          <Label>Recipe Name</Label>
          <InputText
            type="text"
            name="name[x]"
            placeholder="Name of this recipe version"
            onChange={onChange}
          />
        </InputSection>
        <InputSection>
          <Label>Recipe Serves</Label>
          <InputText type="text" placeholder="Customer Serves" />
        </InputSection>
        <InputSection>
          <Label>Sales Price</Label>
          <InputText type="text" placeholder="Just a rough estimation" />
        </InputSection>
        <InputSection>
          <Label>Expected Sales Per Day</Label>
          <InputText type="text" placeholder="Average Sales p/day" />
        </InputSection>
        <InputSection>
          <Label>Total Staff Time Involved</Label>
          <InputText type="text" placeholder="Only cooking or prep time" />
        </InputSection>
        <InputSection>
          <Label>Total Cooking Time</Label>
          <InputText type="text" placeholder="Overall time to make recipe" />
        </InputSection>
        <InputSection>
          <Label>Use as Internal Recipe</Label>
          <SelectList>
            <option value="0">No</option>
            <option value="1">Yes</option>
          </SelectList>
        </InputSection>
        <InputSection>
          <Label>Recipe Wastage</Label>
          <SelectList>
            <option value="0">0%</option>
            <option value="1">2%</option>
            <option value="2">5%</option>
            <option value="3">8%</option>
          </SelectList>
        </InputSection>
        <button type="submit" hidden />
      </Form>
    </GridLayout>
  );
}
