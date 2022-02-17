import React from 'react'
import { Flex, Image } from 'pcln-design-system'
import GlowBox from './GlowBox'

const Section = ({ title, color, alignItems, className, mt, children }) => {
  return (
    <Flex flexDirection='column' alignItems={alignItems || 'none'} mt={mt || 0}>
      <Image src={title} width='500px'/>
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
