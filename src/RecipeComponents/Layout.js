import React from 'react';
import styled from 'styled-components';

const AppLayout = styled.div`
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(6, [col] auto);
  grid-template-areas:
    'header header header header header header'
    'content content content content content content'
    'sidebar sidebar sidebar sidebar sidebar sidebar'
    'sidebar2 sidebar2 sidebar2 sidebar2 sidebar2 sidebar2'
    'footer footer footer footer footer footer';
  background-color: #fff;
  border: 1px solid;
  color: #444;
  min-width: 100%;

  @media only screen and (min-width: 650px) {
    grid-gap: 20px;
    grid-template-columns: repeat(6, [col] auto);
    grid-template-areas:
      'header header header header header header'
      'content content content sidebar sidebar'
      'sidebar2 sidebar2 sidebar2 sidebar2 sidebar2 sidebar2'
      'footer footer footer footer footer footer';
  }
  @media only screen and (min-width: 750px) {
    grid-gap: 20px;
    grid-template-columns: 450px auto;
    grid-template-areas:
      'header   header'
      'content  sidebar'
      'sidebar2 sidebar2'
      'footer   footer';
    max-width: 600px;
  }
`;
const Box = styled.div`
  background-color: #444;
  color: #fff;
  border-radius: 5px;
  padding: 10px;
  font-size: 150%;
`;
const Header = Box.extend`
  grid-area: header;
  background-color: #999;
`;
const Sidebar = Box.extend`
  grid-area: sidebar;
`;
const Sidebar2 = Box.extend`
  grid-area: sidebar2;
  background-color: #ccc;
  color: #444;
`;
const Content = Box.extend`
  grid-area: content;
`;
const Footer = Box.extend`
  grid-area: footer;
  background-color: #999;
`;

export default () => (
  <AppLayout>
    <Header>Header</Header>
    <Sidebar>Sidebar</Sidebar>
    <Sidebar2>Sidebar 2</Sidebar2>
    <Content>
      Content
      <br /> More content than we had before so this column is now quite tall.
    </Content>
    <Footer>Footer</Footer>
  </AppLayout>
);
