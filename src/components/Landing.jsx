import React, { useState, useEffect } from 'react'
import { Text } from 'pcln-design-system'
import {
  LandingContainer,
  StyledVideo,
  ClickMe
} from './styledComponents/Landing'
import { S3_URL } from '../services/constants'

const Landing = ({ verified, started, setStarted }) => {
  const [showClickMe, setShowClickMe] = useState(false)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (verified) {
      window.setTimeout(() => setShowClickMe(true), 1000)
      window.setTimeout(() => setLoaded(true), 2000)
    }
  }, [verified])
  
  return (
    <LandingContainer
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      started={started}
      onClick={() => setStarted(true)}
    >
      <StyledVideo id='landing-video' playsInline muted>
        <source src={`${S3_URL}/whats-your-bourbonality.mp4`} type='video/mp4' />
      </StyledVideo>
      <ClickMe showClickMe={showClickMe} loaded={loaded}>
        <Text color='white' fontSize={4}>Click to start</Text>
      </ClickMe>
    </LandingContainer>
  )
}

export default Landing
