import React from 'react';
import { Text } from 'pcln-design-system';
import { DescriptionFlex, TitleText } from 'containers/ResultPage2/styledComponents/ResultPage'

const Description = ({color, description, subtitle}) => {
  return (<DescriptionFlex flexDirection="column" justifyContent="center">
    <TitleText color={color} fontSize={[4, 5, 6]}>
      {subtitle}
    </TitleText>

    <Text color="white" fontSize={[2, 3, 4]} lineHeight={['20px', '30px', '40x']} m="10px" textAlign="center" px={20}>
      {description.text}
    </Text>
  </DescriptionFlex>)
}

export default Description;