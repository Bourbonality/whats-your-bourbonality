import React from 'react'
import { DotsContainer, Dot } from './styledComponents/ProgressBar'

const ProgressBar = ({ count, slides }) => {
  return (
    <DotsContainer zIndex={120}>
      {slides.map((dot, i) => <Dot key={i} count={count} index={i} />)}
    </DotsContainer>
  )
}

export default ProgressBar
