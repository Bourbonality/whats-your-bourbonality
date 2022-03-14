import React, { useState, useEffect } from 'react'
import { Text } from 'pcln-design-system'
import {
  LandingContainer,
  StyledVideo,
  ClickMe
} from './styledComponents/Landing'
import { S3_URL } from '../services/constants'

const Landing = ({ started, setStarted }) => {
  const [showClickMe, setShowClickMe] = useState(false)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    window.setTimeout(() => setShowClickMe(true), 1800)
    window.setTimeout(() => setLoaded(true), 3000)
  }, [])

  return (
    <LandingContainer
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      started={started}
      onClick={() => setStarted(true)}
    >
      <StyledVideo playsInline muted autoPlay>
        <source src={`${S3_URL}/whats-your-bourbonality.mp4`} type='video/mp4' />
      </StyledVideo>
      <ClickMe showClickMe={showClickMe} loaded={loaded}>
        <Text color='white' fontSize={5}>Click to Begin</Text>
      </ClickMe>
    </LandingContainer>
  )
}

export default Landing
