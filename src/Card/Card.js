
import styled from 'styled-components';
import { Card } from 'react-bootstrap';

const StyledCard = styled(Card)`

  &.card{
  background: ${({ color }) => color || 'white'};
  border-radius: 18px !important;
  display: inline-block;
  height: 180px;
  margin: 1rem;
  position: relative;
  width: 260px;
  }
  :hover{
    box-shadow: 0 4px 8px 0 #00000026, 0 6px 20px 0 #0000006c;
   transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
   cursor:pointer;
   
  }
`


const Title = styled.h1`
    padding-top: 20px;
    font-size: 30px ;
    font-weight: 900;
    font-family: 'Poppins', sans-serif;
`
const Cardtext = styled.p`
    margin-top: -10px;
    padding-top: 10px;
    font-size: 35px ;
    font-weight: 900;
    color: ${({ textcolor }) => textcolor || '#333'} ;
    font-family: 'Poppins', sans-serif;
`

const Delta = styled.p`
    margin-top: -10px;
    font-size: 18px ;
    font-weight: 900;
    color: ${({ textcolor }) => textcolor || '#333'} ;
    font-family: 'Poppins', sans-serif;
`


export { StyledCard, Title, Cardtext, Delta };