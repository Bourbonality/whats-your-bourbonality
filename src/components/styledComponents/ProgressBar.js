import styled from 'styled-components'
import { Absolute, Box } from 'pcln-design-system'

const DotsContainer = styled(Absolute)`
  display: flex;
  top: calc(100% - 35px);
  left: calc(50% - 150px);
  @media only screen
    and (min-width: 280px)
    and (max-width: 830px) {
      top: calc(100% - 30px);
      left: calc(50vw - 105px);
  };
`

const Dot = styled(Box)`
  height: 10px;
  width: 10px;
  background-color: ${props => props.index === props.count
    ? '#C84A22'
    : props.index < props.count
      ? 'white'
      : 'none'
  };
  box-shadow: ${props => props.index === props.count
    ? '0px 0px 4px 2px white'
    : 'none'
  };
  border: 1px white solid;
  border-radius: 50%;
  margin: 4px;
  transition: 0.5s linear all;
  @media only screen
    and (min-width: 280px)
    and (max-width: 830px) {
      margin: 3px;
      height: 6px;
      width: 6px;
  };
`

export {
  DotsContainer,
  Dot
}
