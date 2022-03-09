import React, { useState, useEffect } from 'react'
import { Flex, Image, Text } from 'pcln-design-system'
import styled from 'styled-components'
import { isInViewport } from '../../utils'
import { S3_URL } from '../../services/constants'

const GlowBox = styled(Flex)`
  flex-wrap: wrap;
  margin-top: 30px;
  margin-bottom: 80px;
  border: ${props => props.glow ? '1px solid white' : 'none'};
  border-radius: 20px;
  box-shadow:
    inset ${props => props.glow ? '0 0 10px 2px white' : 'none'},
    inset ${props => props.glow ? `0 0 20px 5px ${props.borderColor}` : 'none'},
    ${props => props.glow ? '0 0 10px 2px white' : 'none'},
    ${props => props.glow ? `0 0 20px 5px ${props.borderColor}` : 'none'};
  transition: 0.4s linear box-shadow, 0.6s linear border;
`

const StyledImage = styled(Image)`
  width: 100%;
  max-width: 600px;
  border-radius: 8px;
`

const RecipeBox = ({ bourbonality, drink, color }) => {
  const [title, setTitle] = useState({})
  const [recipeImage, setRecipeImage] = useState('')
  const [glow, setGlow] = useState(true)

  useEffect(async () => {
    setRecipeImage(`${S3_URL}/drink/${bourbonality}.png`)

    const fetchedTitle = `${S3_URL}/titles/cocktail/${bourbonality}.png`
    setTitle(fetchedTitle)
  }, [bourbonality])

  window.addEventListener('scroll', () => {
    const recBox = document.getElementsByClassName('recipe-box')[0]
    if (!glow && isInViewport(recBox)) setGlow(true)
    if (!isInViewport(recBox)) setGlow(false)
  });

  return (
    <Flex flexDirection='column' alignItems='center'>
      <Image src={title} width='500px'/>
      <GlowBox mb='120px' glow={glow} borderColor={color} className='recipe-box' flexDirection='column' alignItems='center'>
        <Flex flexDirection={['column', 'row']} justifyContent='center' alignItems='center'>
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
      </GlowBox>
    </Flex>
  )
}

export default RecipeBox
