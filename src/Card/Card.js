
import styled from 'styled-components';
import { Card } from 'react-bootstrap';

const StyledCard = styled(Card)`

  &.card{
  background: ${({ color }) => color || 'white'};
  border-radius: 18px !important;
  display: inline-block;
  height: 140px;
  margin: 1rem;
  position: relative;
  width: 220px;
  box-shadow: 0 4px 8px 0 #00000026, 0 6px 20px 0 #0000006c;
  z-index:2;
  
  }
  
`

const CardstyleforChart = styled(Card)`

  &.card{
  background: ${({ color }) => color || 'white'};
  border-radius: 14px !important;
  display: inline-block;
  height: auto !important;
  margin: 1rem;
  position: relative;
  width: auto !important;
  }
  
`

const UpdateCard = styled(Card)`

  &.card{
  background: ${({ color }) => color || 'white'};
  border-radius: 14px !important;
  display: inline-block;
  height: 300px !important;
  margin: 1rem;
  position: relative;
  width: 500px !important;
  padding:8px;
  }
  
`

const Time = styled.h1`
    font-size: 14px ;
    font-weight: 900;
    font-family: 'Poppins', sans-serif
`
const Updatetext = styled.p`
    font-size: 18px ;
    font-weight: 300;
    font-family: 'Poppins', sans-serif;
    color:#007BFF;
`


const Title = styled.h1`
    padding-top: 10px;
    font-size: 26px ;
    font-weight: 900;
    font-family: 'Poppins', sans-serif;
`
const Cardtext = styled.p`
    margin-top: -10px;
    padding-top: 8px;
    font-size: 28px ;
    font-weight: 900;
    color: ${({ textcolor }) => textcolor || '#333'} ;
    font-family: 'Poppins', sans-serif;
`

const Delta = styled.p`
    margin-top: -20px;
    font-size: 16px ;
    font-weight: 900;
    color: ${({ textcolor }) => textcolor || '#333'} ;
    font-family: 'Poppins', sans-serif;
`




export {
  StyledCard, Title, Cardtext, Delta, CardstyleforChart,
  UpdateCard, Updatetext, Time
};