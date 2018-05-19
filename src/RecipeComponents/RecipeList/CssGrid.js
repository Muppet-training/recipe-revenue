import React from 'react';
import styled from 'styled-components';
import HeadingOne from '../SiteComponents/HeadingOne';
import FontAwesome from 'react-fontawesome';

const MainNav = styled.nav`
  ul {
    display: grid;
    grid-gap: 20px;
    padding: 0;
    list-style: none;
    grid-template-columns: repeat(4, 1fr);
  }
  a {
    background: #deddde;
    display: block;
    text-decoration: none;
    padding: 0.8rem;
    text-align: center;
    color: #212121;
    text-transform: uppercase;
    font-size: 1.1rem;
    box-shadow: 2px 2px 6px 1px rgba(0,0,0,0.55);

    &:hover{
      background: #fff;
    }
  }
`;
const TopContainer = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-areas:
    'showcase showcase showcase top-box-a'
    'showcase showcase showcase top-box-b';
  
  @media(max-width: 700px){
    grid-template-areas: 
      'showcase showcase'
      'top-box-a top-box-b' 
  }
`;
const Showcase = styled.header`
  grid-area: showcase;
  min-height: 400px;
  background: url(../../uploads/baloon.jpg) no-repeat;
  background-size: cover;
  background-position: center;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  box-shadow: 2px 2px 6px 1px rgba(0,0,0,0.55);

  h1 {
    font-size: 4rem;
    margin-bottom: 0;
    color: #fff;
    background: rgba(0,0,0,0.4);
    padding: 1rem;
  }

  p{
    font-size: 1.3rem;
    margin-top: 0px;
    color: #fff;
    background: rgba(0,0,0,0.4);
    padding: 1rem;
  }
`;
const TopBox = styled.div`
  background: #deddde;
  display: grid;
  align-items: center;
  justify-items: center;
  box-shadow: 2px 2px 6px 1px rgba(0,0,0,0.55);
  padding: 1.5rem;
`;
const TopBoxa = TopBox.extend`
grid-area: top-box-a;
`;
const TopBoxb = TopBox.extend`
grid-area: top-box-b;
`;
const Price = styled.p`
  font-size: 2.5rem;
`;
const Btn = styled.a`
  background: #333;
  color: #fff;
  padding: 0.6rem 1.3rem;
  text-decoration: none;
  border: 0;
`;
const Boxes = styled.section`
  display: grid;
  grid-gap:20px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  margin-top: 1rem;
`;
const Box = styled.div`
  background: #deddde;
  text-align: center;
  padding: 1.5rem 2rem;
  box-shadow: 2px 2px 6px 1px rgba(0,0,0,0.55);
`;



export default function CssGrid() {
  return (
    <div>
      <MainNav>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </MainNav>
      <TopContainer>
        
        <Showcase>
          <HeadingOne>Your Web Presence</HeadingOne>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry s standard dummy{' '}
          </p>
          <Btn href="#">Read More</Btn>

        </Showcase>
        <TopBoxa>
          <HeadingOne>Membership</HeadingOne>
          <Price>$199/mo</Price>
          <Btn href="#">Buy Now</Btn>
        </TopBoxa>
        <TopBoxb>
          <HeadingOne>Pro Membership</HeadingOne>
          <Price>$299/mo</Price>
          <Btn href="#">Buy Now</Btn>
        </TopBoxb>
      </TopContainer>
      <Boxes>
        <Box>
          <FontAwesome name='chart-pie' size='4x'/>
          <h3>Analytics</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
        </Box>
        <Box>
          <FontAwesome name='globe' size='4x'/>
          <h3>Marketing</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
        </Box>
        <Box>
          <FontAwesome name='cog' size='4x'/>
          <h3>Development</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
        </Box>
        <Box>
          <FontAwesome name='users' size='4x'/>
          <h3>Vicki</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
        </Box>
      </Boxes>
    </div>
  );
}
