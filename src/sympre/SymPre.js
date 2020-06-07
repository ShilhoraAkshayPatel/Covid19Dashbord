import styled, { keyframes } from 'styled-components';
import { Card } from 'react-bootstrap';


const Headtitle = styled.h1`
    padding-top: 4px;
    font-size: 38px ;
    font-weight: 900;
    color:  ${({ textcolor }) => textcolor || '#333'} ;
    text-align:center;
    font-family: 'Roboto', sans-serif;
`

const Animation = keyframes`
from {

    filter: hue-rotate(360deg);
  
  }
  to {
    
    filter: hue-rotate(0deg);
  
  }
`

const StyledCard = styled(Card)`

  &.card{
  background: ${({ color }) => color || 'white'};
  border-radius: 18px !important;
  display: inline-block;
  height: ${({ height }) => height || '500px'} ;
  width: ${({ width }) => width || '400px'} ;
  margin: 1rem;
  position: relative;
  

  }
 :hover{
    box-shadow: 0 4px 8px 0 #00000026, 0 6px 20px 0 #0000006c;
   transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
   cursor:pointer;
   animation: ${Animation} infinite 4s linear;
  }
`

const Title = styled.h1`
    padding-top: 2px;
    font-size: 32px ;
    font-weight: 900;
    font-family: 'Poppins', sans-serif;
    color:  ${({ textcolor }) => textcolor || '#333'} ;
`
const Cardtext = styled.p`
    font-size: ${({ size }) => size || '18px'} ;
    font-weight: ${({ weight }) => weight || '600'}; 
    padding:${({ padding }) => padding || '2px'};
    color:  '#333' ;
    line-height: 2rem;
    font-family: 'Poppins', sans-serif;
    white-space: pre-line;
    color:  ${({ textcolor }) => textcolor || '#333'} ;
    text-align:${({ align }) => align || null} ;
`

export { StyledCard, Title, Cardtext, Headtitle };