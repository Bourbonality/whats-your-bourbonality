import styled from 'styled-components'
import { Flex } from 'pcln-design-system'

const StyledFooter = styled(Flex)`
position: fixed;
top: ${props => `calc(100vh - ${props.show ? '100px' : `${props.showButton}px`})`};
background-color: ${props => props.color};
transition: 0.2s ease-in-out top;
border-radius: 10px 10px 0px 0px;
padding-bottom: 10px;
`

const StyledInput = styled.input`
height: 20px;
border: none;
padding: 2px;
margin-top: 10px;
`

const StyledButton = styled.button`
background: none;
border: none;
outline: none;
color: white;
margin-top: 5px;
font-weight: bold;
`

export {
  StyledButton,
  StyledFooter,
  StyledInput
}
