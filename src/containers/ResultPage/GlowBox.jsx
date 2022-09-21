import React, { useState } from 'react'
import { Glow } from 'containers/ResultPage2/styledComponents/Section'
import { isInViewport } from 'utils'

const GlowBox = ({ className, color, children }) => {
  const [glow, setGlow] = useState()

  window.addEventListener('scroll', () => {
    const box = document.getElementsByClassName(className)[0]
    if (!glow && isInViewport(box)) setGlow(true)
    if (!isInViewport(box)) setGlow(false)
  });

  return (
    <Glow
      justifyContent='center'
      borderColor={color}
      glow={glow}
      className={className}
    >
      {children}
    </Glow>
  )
}

export default GlowBox
