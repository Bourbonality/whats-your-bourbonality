import styled from 'styled-components';

export const Glow = styled.div`
  margin: 30px 20px 80px;
  flex-wrap: wrap;
  padding: 30px;
  border-radius: 20px;
  transition: 0.4s linear box-shadow, 0.6s linear border;
  
  ${({ glow, borderColor }) => glow && `
    border: 1px solid white;
    box-shadow: inset 0 0 10px 2px white, 
                inset 0 0 20px 5px ${borderColor},
                0 0 10px 2px white, 
                0 0 20px 5px ${borderColor};
  `}
`;