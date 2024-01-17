import { Box, Flex } from 'pcln-design-system'
import styled from 'styled-components'

const StyledSlide = styled(Flex)`
  position: absolute;
  overflow: hidden;
  flex-direction: row;
  height: 100%;
  z-index: ${props => props.active && !props.answered ? 100 : props.i};
  @media only screen
    and (min-width: 280px)
    and (max-width: 560px) {
      flex-direction: column;
    };
`

const StyledBox = styled.button`
  position: relative;
  height: 100vh;
  width: 50vw;
  background-image: ${props => `url(${props.imageUrl})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border: none;
  filter: grayscale(80%);
  transition: filter 0.25s ease-in-out, transform 0.5s ease-in-out;
  outline: none;

  &:hover {
    filter: grayscale(0%);
  };

  @media only screen and (min-width: 280px) and (max-width: 560px) {
    height: 50%;
    width: 100vw;

    /* Transform logic for mobile */
    transform: ${props => {
      if (!props.active && !props.answered) {
        if ((props.index === 0 && props.i % 2 === 0) || (props.index === 1 && props.i % 2 === 1)) {
          return 'translateX(100vw)';
        } else if ((props.index === 1 && props.i % 2 === 0) || (props.index === 0 && props.i % 2 === 1)) {
          return 'translateX(-100vw)';
        }
      }
      return 'translateX(0)';
    }};
  };

  @media only screen and (min-device-width: 280px) and (max-device-width: 830px) and (-webkit-min-device-pixel-ratio: 2) {
    filter: grayscale(${props => props.active ? '0%' : '100%'});
  };

  /* Transform logic for desktop */
  transform: ${props => {
    if (!props.active && !props.answered) {
      if ((props.index === 0 && props.i % 2 === 0) || (props.index === 1 && props.i % 2 === 1)) {
        return 'translateY(100%)';
      } else if ((props.index === 1 && props.i % 2 === 0) || (props.index === 0 && props.i % 2 === 1)) {
        return 'translateY(-100%)';
      }
    }
    return 'translateY(0)';
  }};
`

const AnswerBox = styled(Box)`
  width: 400px;
  transition: 0.25s ease-in-out all;
  border: 3px solid white;
  border-radius: 5px;
  font-size: 50px;
  font-family: 'Red Hat Text', sans-serif;
  padding: 10px 20px;
  background-color: #00000090;
  color: white;
  @media (min-width: 280px)
    and (max-width: 830px) {
      width: 200px;
      font-size: 30px;
    };
`

export {
  StyledSlide,
  StyledBox,
  AnswerBox
}
