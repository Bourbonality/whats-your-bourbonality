import React, { useState, useEffect } from 'react'
import { Flex, Image, Link } from 'pcln-design-system'
import styled from 'styled-components'
import Section from './Section'
import { S3_URL } from '../../services/constants'

const ImageFlex = styled(Image)`
    border-radius: 8px;
`

const MerchBox = ({ bourbonality, recommendations, color }) => {
    const [title, setTitle] = useState({})
    const [merch, setMerch] = useState([])

    useEffect(async () => {
        const hat = `${S3_URL}/merch/hat/${bourbonality}.png`
        const shirt = `${S3_URL}/merch/shirt/${bourbonality}.png`
        setMerch([
            {
                image: hat,
                link: 'https://shop.lunacyproductions.com/collections/bourbonality/products/bourbonality-hat'
            }, {
                image: shirt,
                link: 'https://shop.lunacyproductions.com/collections/bourbonality/products/bourbonality-t-shirt-1'
            }
        ])
        setTitle(`${S3_URL}/titles/merch/${bourbonality}.png`)
    }, [bourbonality])

    return (
        <Section
            title={title}
            className='merch-box'
            alignItems='center'
            color={color}
        >
            {merch.map(item => {
                return (
                    <Flex
                        flexWrap='wrap'
                        justifyContent='center'
                        alignItems='center'
                        p={2}
                    >
                        <Link href={item.link} pr={3}>
                            <ImageFlex src={item.image} width='300px'/>
                        </Link>
                    </Flex>
                )
            })}
        </Section>
    )
}

export default MerchBox
