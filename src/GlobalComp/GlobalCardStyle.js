
import styled from 'styled-components';
import { Card } from 'react-bootstrap';

const StyledCard = styled(Card)`

  &.card{
  background: ${({ color }) => color || 'white'};
  border-radius: 18px !important;
  display: inline-block;
  height: 152px;
  margin: 1rem;
  position: relative;
  width: 330px;
  box-shadow: 0 4px 8px 0 #00000026, 0 6px 20px 0 #0000006c;
  z-index:2;
  
  }
  
`
const Text = styled.p`
    padding-top:${({ top }) => top || '0px'} ;
    padding-left: 29px;
    font-size: 40px ;
    font-weight: 600;
    color: ${({ textcolor }) => textcolor || '#333'} ;
    font-family: 'Poppins', sans-serif;
    margin-top:-25px;
    `
const Heading = styled.h1`
    margin-top:${({ margin }) => margin || '0px'} ;
    padding-top:${({ top }) => top || '0px'} ;
    padding-left: 29px;
    padding-top:8px;
    font-size: 20px ;
    font-weight: 100;
    color: ${({ textcolor }) => textcolor || '#333'} ;
    font-family: 'Poppins', sans-serif;

`

const Logo = styled.p`
    margin-top:-30px ;
    padding-left: 240px;
    padding-top:8px;
`







export {
    StyledCard, Text, Heading, Logo
};