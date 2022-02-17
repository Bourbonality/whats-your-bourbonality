import React, { useState, useEffect } from 'react'
import { Flex, Image } from 'pcln-design-system'
import { socialMediaIcons } from '../../mocks'
import { StyledFlex } from './styledComponents/Sidebar'

const Sidebar = ({ color, social, bourbonality }) => {
  const [showSidebar, setShowSidebar] = useState(false)
  const [icons, setIcons] = useState([])
  const [links, setLinks] = useState()

  useEffect(() => {
    const iconsArray = []
    socialMediaIcons.forEach(async icon => {
      iconsArray.push(`https://bourbonality-content-bucket201829-staging.s3.us-east-2.amazonaws.com/public/social-media-icons/${social}${social === 'white' ? '/' : `/${bourbonality}/`}${icon.social}.png`)
    })
    setIcons(iconsArray)
    setLinks(socialMediaIcons.map(icons => icons.link))
  }, [social, bourbonality])

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) setShowSidebar(true)
    else setShowSidebar(false)
  })

  return (
    <StyledFlex
      color={color}
      show={showSidebar}
    >
      <Flex
        flexDirection='column'
        mt={2}
      >
        {icons.map((icon, i) => {
            return (
              <Flex>
                <a href={links[i]}>
                  <Image src={icon} width='45px'/>
                </a>
              </Flex>
            )
          })
        }
      </Flex>
    </StyledFlex>
  )
}

export default Sidebar
