import { Flex } from 'pcln-design-system'
import styled from 'styled-components'

const LandingContainer = styled(Flex)`
  position: absolute;
  height: 100vh;
  transition: transform 0.8s ease-in-out;
  top: 50%;
  left: 50%;
  z-index: ${props => props.ageVerification ? 160 : 150};
  width: 100vw;
  overflow: hidden;
  background-color: #1b191b;

  /* Transform logic */
  transform: ${props => props.started ? 'translate(-50%, -180%)' : 'translate(-50%, -50%)'};
`;


const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  min-width: 1000px;
`

const ClickMe = styled(Flex)`
  position: absolute;
  z-index: 200;
  cursor: pointer;
  top: ${props => props.ageVerification ? 50 : '78vh'};
  width: 300px;
  display: flex;
  justify-content: center;
  opacity: ${props => props.showClickMe ? '1' : '0'};
  transition: opacity 1.4s ease-in-out, transform 0.8s ease-in-out;
  font-family: 'Rokkitt', serif;
  animation: ${props => props.loaded ? 'fade 4s infinite' : 'none'};
  
  @keyframes fade {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.3;
    }
    100% {
      opacity: 1;
    }
  }

  transform: ${props => props.showClickMe ? 'translateY(0vh)' : 'translateY(12vh)'};
`;

export {
  LandingContainer,
  StyledVideo,
  ClickMe
}
