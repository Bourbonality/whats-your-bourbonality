import React, { useState, useEffect } from 'react'
import { Flex, Image, Text } from 'pcln-design-system'
import Section from './Section'

const DiceBox = ({ bourbonality, color, recommendations }) => {
  const [title, setTitle] = useState({})
  const [dice, setDice] = useState({})

  useEffect(async () => {
    const newDice = {}
    recommendations.forEach(rec => {
      rec.notes.forEach(async note => {
        newDice[note] = `https://bourbonality-content-bucket201829-staging.s3.us-east-2.amazonaws.com/public/dice/${note}.png`
      })
    })
    setDice(newDice)

    setTitle(`https://bourbonality-content-bucket201829-staging.s3.us-east-2.amazonaws.com/public/titles/tasting-notes/${bourbonality}.png`)
  }, [bourbonality])

  return (
    <Section
      mt={5}
      title={title}
      color={color}
      className='dice-box'
    >
      {recommendations.map(rec => {
        return (
          <Flex
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            p={2}
          >
            <Flex>
            {rec.notes.map((note, i) => {
              return (
                <Flex
                  height='70px'
                  width='70px'
                  p={2}
                >
                  <a href='https://www.bourbonality.com'>
                    <Image src={dice[note]} m={0}/>
                  </a>
                </Flex>
              )
            })}
          </Flex>
        </Flex>
        )
      })}
    </Section>
  )
}

export default DiceBox
