import React from 'react';
import styled from 'styled-components';

const AppLayout = styled.div`
  display: grid;
  max-width: 1200px;
  text-align: center;
  color: #fff;
  /* grid-template-columns: repeat(4, 1fr); */
  /* grid-auto-rows: minmax(100px, auto); */
  /* position: relative; */
  > * {
    background: #3bbced;
    padding: 30px;
  }
`;

const Header = styled.header`
  grid-area: top;
`;
const Main = styled.main``;
const Section = styled.section``;
const Aside = styled.aside``;
const Nav = styled.nav``;
const Footer = styled.footer`
  grid-area: bottom;
`;

const DisplayGrid = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(100%, auto);
  width: 100%;
  height: 100%;
  background: transparent;
  padding: 0px;
  p {
    border: 1px solid;
    background: #000;
    margin: 0px;
    opacity: 0.2;
  }
`;
const Checkbox = styled.input`
  &:checked + #content #grid {
    display: grid;
  }
`;

export default () => (
  <div>
    <Checkbox type="checkbox" />
    <AppLayout id="content">
      <DisplayGrid id="grid">
        <p />
        <p />
        <p />
        <p />
        <p />
        <p />
        <p />
        <p />
        <p />
        <p />
        <p />
        <p />
      </DisplayGrid>
      <Header>Header</Header>
      <Main>Main</Main>
      <Section>Section</Section>
      <Aside>Aside</Aside>
      <Nav>Nav</Nav>
      <Footer>Footer</Footer>
    </AppLayout>
  </div>
);
