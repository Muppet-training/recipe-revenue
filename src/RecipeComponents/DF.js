import React from 'react';
import styled from 'styled-components';

const PushDownDiv = styled.div`
  margin-top: 100px;
`;

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

class DF extends React.Component {
  onChangeName(e) {
    e.preventDefault();
    console.log('Changing text: ', this.innerRef.trial.value);
  }

  onChangeTrial(e) {
    e.preventDefault();
    console.log('Changing text: ', this.innerRef.name.value);
  }

  onSubmit(e) {
    e.preventDefault();
    console.log('Submit text: ', this.ref);
    // const name = this.refs.name.value.trim();
    // if (!name) {
    //   alert('Please Enter Recipe Name');
    //   return;
    // }
    // this.props.onRecipeAdd(name);
    // this.refs.name.value = '';
  }

  render() {
    return (
      <GridLayout>
        <Form onSubmit={this.onSubmit.bind(this)}>
          {/* <div>
            <label>Recipe Name</label>
            <input
              type="text"
              ref="name"
              onChange={this.onChangeName.bind(this)}
            />
          </div> */}
          <InputText
            type="text"
            innerRef={trial => {
              this.trial = trial;
            }}
            onChange={this.onChangeName.bind(this)}
            placeholder="Name of this recipe version"
          />
          {/* <div>
            <label>Recipe Trial</label>
            <input
              type="text"
              ref="trial"
              onChange={this.onChangeTrial.bind(this)}
            />
          </div> */}
          <button type="submit" hidden>
            {' '}
          </button>
        </Form>
      </GridLayout>
    );
  }
}

export default DF;
