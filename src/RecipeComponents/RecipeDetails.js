import React from 'react';
import styled from 'styled-components';
import HeadingOne from '../SiteComponents/HeadingOne';
import GridArea from './GridArea';
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
    'details details details details details details'
    'lb lb lb lb lb lb'
    'ph ph ph ph ph ph'
    'ps ps ps ps ps ps';
  @media screen and (min-width: 760px) {
    grid-template-areas:
      'header header header header header header '
      'details details details details details details'
      'lb lb lb lb lb lb'
      'ph ph ph ph ph ph'
      'ps ps ps ps ps ps';
  }
`;

const PageHeader = styled.header`
  grid-area: header;
`;
const DetailsSection = styled.section`
  grid-area: details;
  section:last-child {
    margin-bottom: 0px;
  }
`;

const LineBreak = styled.div`
  grid-area: lb;
  height: 40px;
  border-bottom: 1px solid #e5e5e5;
  margin-bottom: 50px;
`;

const PackagingHeader = styled.header`
  grid-area: ph;
`;
const PackagingSection = styled.section`
  grid-area: ps;
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

export default function RecipeDetails() {
  return (
    <div>
      <GridLayout>
        <PageHeader>
          <HeadingOne>Recipe Details</HeadingOne>
        </PageHeader>
        <DetailsSection>
          <InputSection>
            <Label>Recipe Name</Label>
            <InputText type="text" placeholder="Name of this recipe version" />
          </InputSection>
          <InputSection>
            <Label>Recipe Serves</Label>
            <InputText type="text" placeholder="Customer Serves" />
          </InputSection>
          <InputSection>
            {/* <Label>Sales Price</Label> */}
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
        </DetailsSection>

        <LineBreak />

        <PackagingHeader>
          <HeadingOne>Add Packaging</HeadingOne>
        </PackagingHeader>
        <PackagingSection>
          <InputSection>
            <Label>Type of packaging</Label>
            <InputText type="text" />
          </InputSection>
        </PackagingSection>
      </GridLayout>
    </div>
  );
}
