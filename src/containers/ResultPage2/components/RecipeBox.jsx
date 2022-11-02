import React, { useState, useEffect } from 'react'
import { Flex, Image, Text } from 'pcln-design-system'
import styled from 'styled-components'

import { Section } from 'containers/ResultPage2/components';
import { S3_URL } from 'services/constants'

const StyledImage = styled(Image)`
  width: 100%;
  max-width: 600px;
  border-radius: 8px;
`

const RecipeBox = ({ bourbonality, drink, color }) => {
  const [recipeImage, setRecipeImage] = useState('')

  useEffect(() => {
    setRecipeImage(`${S3_URL}/drink/${bourbonality}.png`)
  }, [bourbonality])

  return (
    <Section
      sectionTitle='cocktail'
      bourbonality={bourbonality}
      color={color}
      className='recipe-box'
    >
      <Flex flexDirection={['column', 'row']} alignItems='center'>
        <Flex flexDirection='column' alignItems='center' pt={3}>
          <StyledImage src={recipeImage} />
        </Flex>
        <Flex flexDirection='column' alignItems='center' mb={3}>
          <Text fontWeight='bold' color='white' width={['80%', '100%']} textAlign='center'>
            <h2>{drink.name.toUpperCase()}</h2>
          </Text>
          <Text textAlign={['center', 'left', 'left']} color='white' pb={3} px={3}>
            <Text>
              <h3>INGREDIENTS</h3>
              {drink.ingredients.map(ing => <p>{ing}</p>)}
            </Text>
            <Text>
              <h3>DIRECTIONS</h3>
              {drink.directions}
            </Text>
          </Text>
        </Flex>
      </Flex>
    </Section>
  )
}

export default RecipeBox
