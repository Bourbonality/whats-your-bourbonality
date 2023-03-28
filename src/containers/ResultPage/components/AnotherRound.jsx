import React from 'react'
import { Flex, Image } from 'pcln-design-system';
import { S3_URL, bourbonalityUrl } from 'services/constants'

const AnotherRound = ({ bourbonality }) => {
  return (
    <Flex pb={5} maxWidth='600px'>
      <a href={bourbonalityUrl}>
        <Image src={`${S3_URL}/titles/another-round-2/${bourbonality}.png`} />
      </a>
    </Flex>
  )
}

export default AnotherRound
