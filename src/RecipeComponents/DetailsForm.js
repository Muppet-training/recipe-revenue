import React from 'react';
import styled from 'styled-components';
import HeadingOne from '../SiteComponents/HeadingOne';
import FontAwesome from 'react-fontawesome';

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

class DetailsForm extends React.Component {
  constructor(props) {
    super();
    // const recipeId = props.editingId;
    // console.log('props', props.recipes.length);
    this.state = {
      editingId: props.editingId,
      name: '',
      serves: '',
      price: '',
      sales: '',
      staffTime: '',
      cookingTime: ''
    };
  }

  onChange(e) {
    e.preventDefault();
    console.log('Changing text: ', e.target.value);
    console.log('Changing text: ', e.target.name);
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    console.log('Target', e.currentTarget.name.value);
    e.preventDefault();
    const recipe = this.state;

    const name = recipe.name.trim();

    if (!name) {
      alert('Please Enter Recipe Name');
      return;
    }
    if (!this.state.editingId) {
      console.log('Submit recipe: ', recipe);
      const addedRecipe = this.props.handleRecipeAdd(recipe);
      this.setState({
        editingId: addedRecipe.id,
        name: addedRecipe.name
      });
    } else {
      console.log('Editing: ', recipe);
      const updatedRecipe = this.props.handleUpdateRecipe(recipe);
    }

    // this.refs.name.value = '';
  }
  render() {
    console.log('Details Form: ', this.props);
    return (
      <div>
        <GridLayout>
          <Form onSubmit={this.onSubmit.bind(this)}>
            <InputSection>
              <Label>Recipe Name</Label>
              <InputText
                type="text"
                placeholder="Name of this recipe version"
                name="name"
                value={this.state.name}
                onChange={this.onChange.bind(this)}
              />
            </InputSection>
            <InputSection>
              <Label>Recipe Serves</Label>
              <InputText
                type="text"
                placeholder="Customer Serves"
                name="serves"
                value={this.state.serves}
                onChange={this.onChange.bind(this)}
              />
            </InputSection>
            {/*<InputSection>
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
              <InputText
                type="text"
                placeholder="Overall time to make recipe"
              />
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
            </InputSection> */}
            <button type="submit">Submit Recipe</button>
          </Form>
        </GridLayout>
      </div>
    );
  }
}

export default DetailsForm;
