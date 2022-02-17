import React, { useState, useEffect } from 'react'
import { Flex, Image } from 'pcln-design-system'
import Section from './Section'

const RecommendationBox = ({ bourbonality, recommendations, color }) => {
  const [title, setTitle] = useState({})
  const [recs, setRecs] = useState({})

  useEffect(async () => {
    const fetchedRecs = {}
    recommendations.forEach(async rec => {
      // fetchedRecs[rec.imageUrl] = await Storage.get(`bourbons/${rec.imageUrl}.png`)
      fetchedRecs[rec.imageUrl] = `https://bourbonality-content-bucket201829-staging.s3.us-east-2.amazonaws.com/public/bourbons/${rec.imageUrl}.png`
    })
    setRecs(fetchedRecs)

    // const fetchedTitle = await Storage.get(`titles/recs/${bourbonality}.png`)
    const fetchedTitle = `https://bourbonality-content-bucket201829-staging.s3.us-east-2.amazonaws.com/public/titles/recs/${bourbonality}.png`
    setTitle(fetchedTitle)
  }, [bourbonality])

  return (
    <Section
      title={title}
      color={color}
      alignItems='center'
      className='rec-box'
    >
      {recommendations.map(rec => {
        return (
          <Flex
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            p={2}
          >
            <Flex
              p={2}
            >
              <Flex
                height='500px'
                width='90%'
                justifyContent='center'
                p={2}
              >
                <Image src={recs[rec.imageUrl]} />
              </Flex>
            </Flex>
          </Flex>
        )
      })}
    </Section>
  )
}

export default RecommendationBox
