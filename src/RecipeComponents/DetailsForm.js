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
    super(props);
    console.log('EditingId: ', this.props.editingId);
    this.state = {
      // editingId: this.props.editingId,
      recipeToUpdate: {
        id: this.props.editingId,
        name: '',
        serves: '',
        price: '',
        estSales: '',
        staffTime: '',
        cookingTime: '',
        internal: '',
        wastage: ''
      }
    };
  }

  handleRecipe = submittedRecipe =>
    this.setState({
      recipes: this.state.recipes
        .filter(x => x.id !== submittedRecipe.id)
        .concat([submittedRecipe])
    });

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('Passing Props!: ', nextProps);
    if (nextProps.editingId === prevState.recipeToUpdate.id) {
      return null;
    }
    if (nextProps.editingId == 0) {
      const filterRecipe = [
        {
          id: 0,
          name: '',
          serves: '',
          price: '',
          estSales: '',
          staffTime: '',
          cookingTime: '',
          internal: '',
          wastage: ''
        }
      ];
      return { recipeToUpdate: filterRecipe[0] };
    }

    const filterRecipe = nextProps.recipes.filter(
      recipe => recipe.id === nextProps.editingId
    );

    console.log('filterRecipe: ', filterRecipe[0]);
    console.log('prevState.recipeToUpdate.id: ', prevState.recipeToUpdate.id);

    console.log('getDerivedStateFromProps: ', nextProps);
    return { recipeToUpdate: filterRecipe[0] };
  }

  checkInput() {
    var x = document.forms['myForm']['age'].value;
    if (isNaN(x)) {
      alert('Must input numbers');
      return false;
    }
  }

  onChange(e) {
    e.preventDefault();
    // console.log('Current State: ', this.state);
    console.log('Changing text: ', e.target.value);
    console.log('Changing text: ', e.target.name);
    const updateName = e.currentTarget.name;
    var updateValue = e.currentTarget.value;
    const numberFields = [
      'serves',
      'price',
      'estSales',
      'staffTime',
      'cookingTime',
      'internal',
      'wastage'
    ];
    const isNumberField = numberFields.includes(updateName);

    if (isNumberField && isNaN(updateValue)) {
      alert('Must input numbers');
      this.setState((prevState, props) => ({
        recipeToUpdate: {
          ...prevState.recipeToUpdate,
          [updateName]: ''
        }
      }));
      return;
    }

    if (isNumberField && updateValue != '') {
      updateValue = Number(updateValue);
      console.log('UpdateNumber:', updateValue);
    }

    this.setState((prevState, props) => ({
      recipeToUpdate: {
        // rest operator (...) expands out to:
        ...prevState.recipeToUpdate, // x:0, y:0,
        [updateName]: updateValue // overwrites old y
      }
      // radius is not overwritten by setState
    }));
  }

  onSubmit(e) {
    e.preventDefault();
    const recipe = this.state;
    console.log('Recipe To Submit!', recipe);

    const name = recipe.recipeToUpdate.name.trim();

    if (!name) {
      alert('Please Enter Recipe Name');
      return;
    }

    if (!this.state.recipeToUpdate.id) {
      console.log('Submit recipe: ', recipe);
      this.props.handleRecipeAdd(recipe);
      // this.setState({
      //   editingId: addedRecipe.id,
      //   name: addedRecipe.name
      // });
    } else {
      // console.log('Editing: ', recipe);
      this.props.handleUpdateRecipe(recipe);
    }

    // this.refs.name.value = '';
  }
  render() {
    console.log('Details Form: ', this.state);
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
                value={this.state.recipeToUpdate.name}
                onChange={this.onChange.bind(this)}
              />
            </InputSection>
            <InputSection>
              <Label>Recipe Serves</Label>
              <InputText
                type="text"
                placeholder="Customer Serves"
                name="serves"
                value={this.state.recipeToUpdate.serves}
                onChange={this.onChange.bind(this)}
              />
            </InputSection>
            <InputSection>
              <Label>Sales Price</Label>
              <InputText
                type="text"
                placeholder="Just a rough estimation"
                name="price"
                value={this.state.recipeToUpdate.price}
                onChange={this.onChange.bind(this)}
              />
            </InputSection>
            <InputSection>
              <Label>Expected Sales Per Day</Label>
              <InputText
                type="text"
                placeholder="Average Sales p/day"
                name="estSales"
                value={this.state.recipeToUpdate.estSales}
                onChange={this.onChange.bind(this)}
              />
            </InputSection>
            <InputSection>
              <Label>Total Staff Time Involved</Label>
              <InputText
                type="text"
                placeholder="Only cooking or prep time"
                name="staffTime"
                value={this.state.recipeToUpdate.staffTime}
                onChange={this.onChange.bind(this)}
              />
            </InputSection>
            <InputSection>
              <Label>Total Cooking Time</Label>
              <InputText
                type="text"
                placeholder="Overall time to make recipe"
                name="cookingTime"
                value={this.state.recipeToUpdate.cookingTime}
                onChange={this.onChange.bind(this)}
              />
            </InputSection>
            {/*<InputSection>
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
