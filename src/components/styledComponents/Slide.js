import { Box, Flex } from 'pcln-design-system'
import styled from 'styled-components'

const StyledSlide = styled(Flex)`
  position: absolute;
  overflow: hidden;
  flex-direction: row;
  z-index: ${props => props.active && !props.answered ? 100 : props.i};
  @media only screen
    and (min-width: 280px)
    and (max-width: 560px) {
      flex-direction: column;
    };
`

const StyledBox = styled.button`
  position: relative;
  top: ${props =>(!props.active && !props.answered && props.index === 0 && props.i % 2 === 0) || (!props.active && !props.answered && props.index === 1 && props.i % 2 === 1)
    ? '100vh'
      : (!props.active && !props.answered && props.index === 1 && props.i % 2 === 0) || (!props.active && !props.answered && props.index === 0 && props.i % 2 === 1)
      ? '-100vh'
        : 0};
  left: 0;
  height: 100vh;
  width: 50vw;
  background-image: ${props => `url(${props.imageUrl})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border: none;
  filter: grayscale(80%);
  transition: 0.25s ease-in-out filter, 0.7s ease-in-out top, 0.7s ease-in-out left;
  outline: none;
  &:hover {
    transition: 0.25s ease-in-out filter, 0.7s ease-in-out top, 0.7s ease-in-out left;
    filter: grayscale(0%);
  };
  @media only screen
    and (min-width: 280px)
    and (max-width: 560px) {
      top: 0;
      left: ${props => (!props.active && !props.answered && props.index === 0 && props.i % 2 === 0) || (!props.active && !props.answered && props.index === 1 && props.i % 2 === 1)
        ? '100vw'
          : (!props.active && !props.answered && props.index === 1 && props.i % 2 === 0) || (!props.active && !props.answered && props.index === 0 && props.i % 2 === 1)
          ? '-100vw'
            : 0};
    };
  @media only screen
    and (min-width: 280px)
    and (max-width: 560px) {
      height: 50vh;
      width: 100vw;
    };
  @media only screen
    and (min-device-width: 280px)
    and (max-device-width: 830px)
    and (-webkit-min-device-pixel-ratio: 2) {
      filter: grayscale(${props => props.active ? '0%' : '100%'});
    };
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
