import React from 'react';
import styled from 'styled-components';

const HeadingH1 = styled.h1`
  margin: 0px;
  margin-bottom: 20px;
  padding: 0px;
  font-size: 30px;
`;

export default function HeadingOne({ children }) {
  return <HeadingH1>{children}</HeadingH1>;
}
