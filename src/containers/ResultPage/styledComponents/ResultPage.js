import { Flex, Image, Text } from 'pcln-design-system';
import styled from 'styled-components';

const Background = styled(Flex)`
	position: fixed;
	z-index: 150;
	height: 100vh;
	width: 100vw;
	background-color: ${(props) => props.backgroundColor};
`;

const StyledFlex = styled(Flex)`
	position: absolute;
	max-width: 1080px;
	z-index: 150;
	background-color: ${(props) => props.backgroundColor};
`;

const TitleImage = styled(Image)`
	width: 100%;
`;

const StyledImage = styled(Flex)`
	max-width: 100%;
	width: 100vw;
	max-height: 100vh;
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
`;

const TitleText = styled(Text)`
	font-family: 'Orelega One', cursive;
	color: ${(props) => props.color};
	margin: 10px;
	font-weight: bold;
	text-align: center;
`;

export {
	Background,
	Section,
	StyledFlex,
	StyledImage,
	Description,
	TitleImage,
	TitleText,
	FooterSection,
};
