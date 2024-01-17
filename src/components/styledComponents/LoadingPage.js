import { Flex } from 'pcln-design-system'
import styled from 'styled-components'

const LoadingContainer = styled(Flex)`
  position: absolute;
  transition: transform 0.8s ease-in-out;
  z-index: 180;
  width: 100vw;
  height: 100%; 
  overflow: hidden;
  background-color: #000;

  /* Transform logic */
  transform: ${props => (props.showLoading && !props.showResult) ? 'translateY(0vh)' : 'translateY(-120vh)'};
`;

const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  min-width: 1000px;
`

export {
  LoadingContainer,
  StyledVideo
}
