import React, { useEffect, useState } from 'react'
import { Flex } from 'pcln-design-system'
import { results } from '../mocks'
import { useScores } from '../hooks/useScores'
import { useTraits } from '../hooks/useTraits'
import { S3_URL } from '../services/constants'
import { StyledSlide, StyledBox, AnswerBox } from './styledComponents/Slide'

const Slide = ({
  slide,
  i,
  count,
  setCount,
  setBourbonality,
}) => {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  const { scores, updateScores } = useScores();
  const { traits, updateTraits } = useTraits()
  const [slideData, setSlideData] = useState([])

  useEffect(() => {
    const newSlideData = []
    slide.map(async (slideData) => {
        newSlideData.push({
          imageUrl: isMobile ? `${S3_URL}/answers/${slideData.name}.jpg` : `${S3_URL}/answers/${slideData.name}.jpg`,
          trait: slideData.trait,
          title: slideData.title,
        })
      }
    )
    setSlideData(newSlideData)
    console.log('*** hi')
  }, [])

  const handleClick = (trait) => {
    updateTraits(scores)

    if (count <= 14) {
      setCount(count + 1)
      updateScores(trait)
    }

    if (count === 14) {
      let tally = 0
      for (let i = 0; i < results.length; i++) {
        const resultTraits = results[i].traits
        for (let k = 0; k < resultTraits.length; k++) {
          const trait = resultTraits[k]
          if (traits[trait]) tally++
        }
        if (tally === 3) setBourbonality(results[i])
        else tally = 0
      }
    }
  }

  return (
    <StyledSlide
      answered={i < count}
      active={i === count}
      i={i}
    >
      {slideData.map((slide, index) => {
        return (
          <StyledBox
            key={index}
            answered={i < count}
            active={i === count}
            index={index}
            i={i}
            imageUrl={slide.imageUrl}
            onClick={() => handleClick(slide.trait)}
          >
            <Flex flexDirection='row' justifyContent='center' alignItems='center' width='100%'>
              <AnswerBox>
                {slide.title}
              </AnswerBox>
            </Flex>
          </StyledBox>
        )
      })}
    </StyledSlide>
  )
}

export default Slide
