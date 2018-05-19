import React from 'react';

const AppLayout = styled.div``;
const Box = styled.div``;
const Header = extend.box``;
const Sidebar = extend.box``;
const Sidebar2 = extend.box``;
const Content = extend.box``;
const Footer = extend.box``;



export default () => (
<AppLayout>
  <Header>Header</Header>
  <Sidebar>Sidebar</Sidebar>
  <Sidebar2>Sidebar 2</Sidebar2>
  <Content>Content
    <br /> More content than we had before so this column is now quite tall.
  </Content>
  <Footer class="box footer">Footer</Footer>
</AppLayout>
)
