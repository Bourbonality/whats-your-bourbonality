import { Flex, Text } from 'pcln-design-system';
import styled from 'styled-components';

const StyledFlex = styled(Flex)`
  position: absolute;
  width: 100vw;
  background: grey;
  z-index: 150;
  background-color: ${(props) => props.backgroundColor};
`;

const Section = styled(Flex)`
  position: relative;
  flex-direction: column;
  align-items: center;
  padding: 0px 30px;
`;

const FooterSection = styled(Flex)`
  position: relative;
  flex-direction: column;
  align-items: center;
  top: 4em;
`;

const Description = styled(Flex)`
  position: relative;
  margin-top: -60px;
  height: calc(100vh / 3);
  width: 100vw;
`;

const TitleText = styled(Text)`
  font-family: 'Orelega One', cursive;
  color: ${(props) => props.color};
  margin: 10px;
  font-weight: bold;
  text-align: center;
`;

export { Section, StyledFlex, Description, TitleText, FooterSection };
