import styled from 'styled-components'

const Glow = styled.div`
  flex-wrap: wrap;
  margin-top: 30px;
  margin-bottom: 80px;
  border: ${props => props.glow ? '1px solid white' : 'none'};
  border-radius: 20px;
  box-shadow:
    inset ${props => props.glow ? '0 0 10px 2px white' : 'none'},
    inset ${props => props.glow ? `0 0 20px 5px ${props.borderColor}` : 'none'},
    ${props => props.glow ? '0 0 10px 2px white' : 'none'},
    ${props => props.glow ? `0 0 20px 5px ${props.borderColor}` : 'none'};
  transition: 0.4s linear box-shadow, 0.6s linear border;
`

export { Glow }
