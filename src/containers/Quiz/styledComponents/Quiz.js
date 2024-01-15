import styled from 'styled-components'
import { Flex } from 'pcln-design-system';

const StyledFlex = styled(Flex)`
  height: 100%;
`

const ShowResultsButton = styled.button`
  position: fixed;
  top: 50px;
  left: 50px;
  z-index: 1000;
`

const NextButton = styled.button`
  position: fixed;
  top: 80px;
  left: 50px;
  background-color: white;
  border: ${props => props.bourbonality.color} 2px solid;
  border-radius: 5px;
  color: ${props => props.bourbonality.color};
  z-index: 400;
  outline: none;
  &:hover {
    background-color: ${props => props.bourbonality.color};
    color: white;
  }
  cursor: pointer;
`

export {
  ShowResultsButton,
  StyledFlex,
  NextButton
}
