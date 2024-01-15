import { Flex, Image, Text } from 'pcln-design-system';
import styled from 'styled-components';

export const Background = styled(Flex)`
	position: fixed;
	z-index: 150;
	background-color: ${(props) => props.backgroundColor};
`;

export const StyledFlex = styled(Flex)`
	position: absolute;
	max-width: 100vw;
	z-index: 150;
	background-color: ${(props) => props.backgroundColor};
`;

export const TitleImage = styled(Image)`
	width: 100%;
`;

export const StyledImage = styled(Image)`
	max-width: 100%;
	width: 100vw;
	max-height: 100vh;
	box-shadow: 0 0 50px 50px white inset;
`;

export const Section = styled(Flex)`
	position: relative;
	flex-direction: column;
	align-items: center;
	padding: 0px 30px;
`;

export const FooterSection = styled(Flex)`
	position: relative;
	flex-direction: column;
	align-items: center;
	top: 4em;
`;

export const DescriptionFlex = styled(Flex)`
	position: relative;
	margin-top: -40px;
	height: calc(100vh / 3);
`;

export const TitleText = styled(Text)`
	font-family: 'Orelega One', cursive;
	color: ${(props) => props.color};
	font-weight: bold;
	padding: 20px;
	text-align: center;
`;
