import React from 'react';
import styled from 'styled-components';

const AppLayout = styled.div`
  display: grid;
  max-width: 1200px;
  text-align: center;
  color: #fff;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(100px, auto);
  grid-gap: 10px;
  grid-template-areas:
    'header header header header'
    'footer footer footer footer'
    'main main  main main'
    'main main  main main'
    'aside aside nav nav'
    'section section section section'
    'section section section section';
  @media screen and (min-width: 760px) {
    grid-template-areas:
      'header header header header'
      'aside aside  main main'
      'nav nav main main'
      'section section section section'
      'footer footer footer footer';
  }
  > * {
    background: #3bbced;
    padding: 30px;
  }
`;

const Header = styled.header`
  grid-area: header;
`;
const Main = styled.main`
  grid-area: main;
`;
const Section = styled.section`
  grid-area: section;
`;
const Aside = styled.aside`
  grid-area: aside;
`;
const Nav = styled.nav`
  grid-area: nav;
`;
const Footer = styled.footer`
  grid-area: footer;
`;

export default () => (
  <div>
    <AppLayout>
      <Header>Header</Header>
      <Main>Main</Main>
      <Section>Section</Section>
      <Aside>Aside</Aside>
      <Nav>Nav</Nav>
      <Footer>Footer</Footer>
    </AppLayout>
  </div>
);
