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
    this.state = {
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
  static getDerivedStateFromProps(nextProps, prevState) {
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
    } else {
      const filterRecipe = nextProps.recipes.filter(
        recipe => recipe.id === nextProps.editingId
      );
      console.log('filterRecipe', filterRecipe);
      return { recipeToUpdate: filterRecipe[0] };
    }
    return null;
  }
  onChange(e) {
    e.preventDefault();
    const updateName = e.currentTarget.name;
    var updateValue = e.currentTarget.value;
    const numberFields = [
      'serves',
      'price',
      'estSales',
      'staffTime',
      'cookingTime'
    ];
    const isNumberField = numberFields.includes(updateName);
    if (isNumberField && isNaN(updateValue)) {
      alert('Input Field Must Contain Numbers');
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
        ...prevState.recipeToUpdate,
        [updateName]: updateValue
      }
    }));
  }

  onSubmit(e) {
    e.preventDefault();
    const recipe = this.state;
    const name = recipe.recipeToUpdate.name.trim();
    if (!name) {
      alert('Please Enter Recipe Name');
      return;
    }
    if (!this.state.recipeToUpdate.id) {
      console.log('Submit recipe: ', recipe);
      this.props.handleRecipeAdd(recipe);
    } else {
      this.props.handleUpdateRecipe(recipe);
    }
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
            <InputSection>
              <Label>Use as Internal Recipe</Label>
              <SelectList
                onChange={this.onChange.bind(this)}
                name="internal"
                value={this.state.recipeToUpdate.internal}
              >
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </SelectList>
            </InputSection>
            <InputSection>
              <Label>Recipe Wastage</Label>
              <SelectList
                onChange={this.onChange.bind(this)}
                name="wastage"
                value={this.state.recipeToUpdate.wastage}
              >
                <option value="0">0%</option>
                <option value="2">2%</option>
                <option value="5">5%</option>
                <option value="8">8%</option>
              </SelectList>
            </InputSection>
            <button type="submit">Submit Recipe</button>
          </Form>
        </GridLayout>
      </div>
    );
  }
}

export default DetailsForm;
