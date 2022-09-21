import React, { useState } from 'react'
import { Flex } from 'pcln-design-system';
import { Glow } from 'containers/ResultPage2/styledComponents/Section'
import { isInViewport } from 'utils'
import { TitleImage } from 'containers/ResultPage/styledComponents/ResultPage'

const Section = ({ title, color, alignItems, className, mt, children }) => {
  const [glow, setGlow] = useState()

  window.addEventListener('scroll', () => {
    const box = document.getElementsByClassName(className)[0]
    if (!glow && isInViewport(box)) setGlow(true)
    if (!isInViewport(box)) setGlow(false)
  });

  return (
    <>
      {title && <TitleImage src={title} />}
      <Flex flexDirection='column' alignItems={alignItems || 'none'} mt={mt || 0} mx={2}>
        <Glow
          justifyContent='center'
          borderColor={color}
          glow={glow}
          className={className}
        >
          {children}
        </Glow>
      </Flex>
    </>
  )
}

export default Section
