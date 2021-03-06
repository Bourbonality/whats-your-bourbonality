import { Flex } from 'pcln-design-system'
import styled from 'styled-components'

const LoadingContainer = styled(Flex)`
  position: absolute;
  top: ${props => (props.showLoading && !props.showResult) ? '0vh' : '-120vh'};
  transition: 0.8s ease-in-out top;
  z-index: 180;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: #000;
`

const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  min-width: 1000px;
`

export {
  LoadingContainer,
  StyledVideo
}
