import React, { useState } from 'react'
import isInViewport from '../../utils/isInViewport'
import { Glow } from './styledComponents/GlowBox'

const GlowBox = ({ className, color, children }) => {
  const [glow, setGlow] = useState(true)

  window.addEventListener('scroll', () => {
    const box = document.getElementsByClassName(className)[0]
    if (!glow && isInViewport(box)) setGlow(true)
    if (!isInViewport(box)) setGlow(false)
  });

  return (
    <Glow
      justifyContent='center'
      p={3}
      borderColor={color}
      glow={glow}
      className={className}
    >
      {children}
    </Glow>
  )
}

export default GlowBox
