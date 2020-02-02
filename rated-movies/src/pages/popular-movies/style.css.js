import styled from 'styled-components/macro'
import {Button } from 'react-bootstrap';

export const FilterButton = styled(Button)`
@media only screen 
  and (min-device-width: 768px) 
  and (max-device-width: 1024px) 
  and (-webkit-min-device-pixel-ratio: 1) {

}

@media only screen 
and (max-device-width: 767px) 
  and (-webkit-min-device-pixel-ratio: 1) { 
    margin-top:15px;
}
`

export const NoResult = styled.p`
  margin: auto;
  font-size: 20px;
  font-weight: bold;
  font-style: italic;
`