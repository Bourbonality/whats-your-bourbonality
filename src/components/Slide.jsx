import React, { useEffect, useState } from 'react'
import { Flex } from 'pcln-design-system'
import { results } from 'mocks'
import { useScores } from 'hooks/useScores'
import { S3_URL } from 'services/constants'
import { StyledSlide, StyledBox, AnswerBox } from 'components/styledComponents/Slide'

const Slide = ({
  slide,
  i,
  count,
  setCount,
  setBourbonality,
}) => {
  const { scores, updateScores } = useScores();
  const [slideData, setSlideData] = useState([])

  useEffect(() => {
    const newSlideData = []
    slide.map(async (slideData) => {
        newSlideData.push({
          imageUrl: `${S3_URL}/answers/${slideData.name}.jpg`,
          trait: slideData.trait,
          title: slideData.title,
        })
      }
    )
    setSlideData(newSlideData)
  }, [slide])

  useEffect(() => {
    const scoresArr = Object.entries(scores);
    scoresArr.sort((a,b) => b[1] - a[1]);

    if (count === 15) {
      const finalTraits = new Set();

      scoresArr.forEach((score, i) => {
        if (i < 3) finalTraits.add(score[0]);
      })

      const bourbonality = results.find(result => result.traits.every(trait => finalTraits.has(trait)));

      setBourbonality(bourbonality);
    }
  }, [count, scores, setBourbonality])

  const handleClick = (trait) => {
    updateScores(trait)
    if (count <= 14) setCount(count + 1)
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
