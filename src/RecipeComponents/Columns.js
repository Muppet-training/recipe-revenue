import React from 'react';
import styled from 'styled-components';

const AppLayout = styled.div`
  color: #fff;
  text-align: center;
  display: grid;
  max-width: 1200px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, minmax(150px, auto));
  /* align-items: stretch;
  justify-items: start; */
  div {
    background: #3bbced;
    padding: 30px;

    &:nth-child(even) {
      background: #777;
    }
  }
`;

const One = styled.div`
  justify-self: start;
  align-self: end;
`;
const Two = styled.div`
  justify-self: center;
  align-self: center;
`;
const Three = styled.div`
  justify-self: start;
  align-self: start;
`;
const Four = styled.div``;
const Five = styled.div``;
const Six = styled.div``;

export default () => (
  <AppLayout>
    <One>1</One>
    <Two>2</Two>
    <Three>3</Three>
    <Four>4</Four>
    <Five>5</Five>
    <Six>6</Six>
  </AppLayout>
);
