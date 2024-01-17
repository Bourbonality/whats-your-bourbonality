import React, { useEffect } from 'react'
import { Image, Text } from 'pcln-design-system'
import { LandingContainer, ClickMe } from './styledComponents/Landing'

const AgeVerification = ({ verified, setVerified }) => {
    useEffect(() => {
        const handleFirstInteraction = () => {
          const videoElement = document.getElementById('landing-video');
          
          if (videoElement) {
            videoElement.play()
              .catch(error => {
                console.error('Error trying to play the video:', error);
              });
          }
    
          // Remove event listener after the first interaction
          document.removeEventListener('touchstart', handleFirstInteraction);
          document.removeEventListener('click', handleFirstInteraction);
        };
    
        // Add event listeners for user interactions
        document.addEventListener('touchstart', handleFirstInteraction);
        document.addEventListener('click', handleFirstInteraction);
    
        return () => {
          // Cleanup listeners on component unmount
          document.removeEventListener('touchstart', handleFirstInteraction);
          document.removeEventListener('click', handleFirstInteraction);
        };
      }, []);

  return (
    <LandingContainer
      flexDirection='column'
      justifyContent='center'
      ageVerification={true}
      alignItems='center'
      started={verified}
      onClick={() => setVerified(true)}
    >
      <Image src={'/bourbonalligator.png'} alt='bourbonalligator' style={{ opacity: 0.2 }} />
      <ClickMe ageVerification={true} showClickMe={true} loaded={true}>
        <Text color='white' fontSize={4}>By Clicking Here You Acknowledge You Are Over 21 Years of Age</Text>
      </ClickMe>
    </LandingContainer>
  )
}

export default AgeVerification
