import styled from 'styled-components';

// export const Glow = styled.div`
// 	margin: 40px;
// 	flex-wrap: wrap;
// 	margin-top: 30px;
// 	margin-bottom: 80px;
// 	padding: 30px;
// 	border: ${(props) => (props.glow ? '1px solid white' : 'none')};
// 	border-radius: 20px;
// 	box-shadow: inset ${(props) => (props.glow ? '0 0 10px 2px white' : 'none')},
// 		inset
// 			${(props) => (props.glow ? `0 0 20px 5px ${props.borderColor}` : 'none')},
// 		${(props) => (props.glow ? '0 0 10px 2px white' : 'none')},
// 		${(props) => (props.glow ? `0 0 20px 5px ${props.borderColor}` : 'none')};
// 	transition: 0.4s linear box-shadow, 0.6s linear border;
// `;

export const Glow = styled.div`
  margin: 30px 20px 80px;
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