import { Flex } from 'pcln-design-system'
import styled from 'styled-components'

const StyledFlex = styled(Flex)`
  position: fixed;
  background-color: ${props => props.color};
  z-index: 400;
  top: 80px;
  left: ${props => props.show ? 'calc(100vw - 66px)' : '110vw'};
  border-radius: 8px 0px 0px 8px;
  box-shadow: 0 0 20px 5px #00000090;
  transition: 0.4s ease-in-out left;
`

export { StyledFlex }
