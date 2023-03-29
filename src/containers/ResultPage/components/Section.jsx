import React, { useEffect, useState } from 'react'
import { Flex, Link } from 'pcln-design-system';
import { Glow } from 'containers/ResultPage/styledComponents/Section'
import { isInViewport } from 'utils'
import { TitleImage } from 'containers/ResultPage/styledComponents/ResultPage'
import { S3_URL } from 'services/constants'

const Section = ({ bourbonality, sectionTitle, color, alignItems, className, mt, link, children }) => {
  const [title, setTitle] = useState({})
  const [glow, setGlow] = useState()

  useEffect(() => {
    sectionTitle && bourbonality && setTitle(`${S3_URL}/titles/${sectionTitle}/${bourbonality}.png`)
  }, [sectionTitle, bourbonality])

  window.addEventListener('scroll', () => {
    const box = document.getElementsByClassName(className)[0]
    if (!glow && isInViewport(box)) setGlow(true)
    if (!isInViewport(box)) setGlow(false)
  });

  return (
    <>
      {sectionTitle && (link ? <Link target='_blank' href={link}><TitleImage src={title} /></Link> : <TitleImage src={title} />)}
      <Flex flexDirection='column' alignItems={alignItems || 'none'} mt={mt || 0} mx={2}>
        <Glow
          justifyContent='center'
          borderColor={color}
          glow={glow}
          className={className}
        >
          {children}
        </Glow>
      </Flex>
    </>
  )
}

export default Section
