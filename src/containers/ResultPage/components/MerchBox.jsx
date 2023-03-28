import React, { useState, useEffect } from 'react'
import { Flex, Image, Link } from 'pcln-design-system'
import styled from 'styled-components'
import { Section } from 'containers/ResultPage/components';
import { S3_URL } from 'services/constants'

const ImageFlex = styled(Image)`
    border-radius: 8px;
`

const MerchBox = ({ bourbonality, color }) => {
    const [merch, setMerch] = useState([])
    const collectionLink = `https://shop.lunacyproductions.com/collections/i-am-${bourbonality}/products/i-am-${bourbonality}-bourbonality`

    useEffect(() => {
        const hat = `${S3_URL}/merch/hat/${bourbonality}.png`
        const shirt = `${S3_URL}/merch/shirt/${bourbonality}.png`
        setMerch([
            {
                image: hat,
                link: `${collectionLink}-hat`
            }, {
                image: shirt,
                link: `${collectionLink}-tee`
            }
        ])
    }, [bourbonality, collectionLink])

    return (
      <Section
        sectionTitle='merch'
        bourbonality={bourbonality}
        className='merch-box'
        alignItems='center'
        color={color}
        link={`https://shop.lunacyproductions.com/collections/i-am-${bourbonality}`}
      >
        <Flex
          flexWrap='wrap'
          justifyContent='center'
          alignItems='center'
          p={2}
        >
          {merch.map(item => {
            return (
              
                <Link href={item.link} pr={3}>
                  <ImageFlex src={item.image} width='300px'/>
                </Link>
            )
          })}
        </Flex>
      </Section>
    )
}

export default MerchBox
