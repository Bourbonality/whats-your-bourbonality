import React from 'react'
import { Flex, Image } from 'pcln-design-system'
import GlowBox from 'containers/ResultPage/GlowBox'
import { TitleImage } from 'containers/ResultPage/styledComponents/ResultPage'

const Section = ({ title, color, alignItems, className, mt, children }) => {
  return (
    <Flex flexDirection='column' alignItems={alignItems || 'none'} mt={mt || 0} mx={5}>
      <TitleImage src={title} />
      <GlowBox
        className={className}
        color={color}
      >
        {children}
      </GlowBox>
    </Flex>
  )
}

export default Section
