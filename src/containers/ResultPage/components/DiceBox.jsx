import React, { useState, useEffect } from 'react'
import { Flex, Image } from 'pcln-design-system'
import { Section } from 'containers/ResultPage/components';
import { S3_URL } from 'services/constants'

const DiceBox = ({ bourbonality, color, recommendations }) => {
  const [dice, setDice] = useState({})

  useEffect(() => {
    const newDice = {}
    recommendations.forEach(rec => {
      rec.notes.forEach(note => {
        newDice[note] = `${S3_URL}/dice/${note}.png`
      })
    })
    setDice(newDice)
  }, [recommendations, bourbonality])

  return (
    <Section
      sectionTitle='tasting-notes'
      bourbonality={bourbonality}
      color={color}
      className='dice-box'
    >
      {recommendations.map(rec => {
        return (
          <Flex
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
          >
            <Flex>
              {rec.notes.map((note, i) => {
                return (
                  <Flex
                    height='70px'
                    width='70px'
                    p={2}
                  >
                    <a target='_blank' rel="noopener noreferrer" href='https://shop.lunacyproductions.com/collections/bourbonality/products/new-bourbonality%E2%84%A2-bourbon-tasting-dice'>
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
