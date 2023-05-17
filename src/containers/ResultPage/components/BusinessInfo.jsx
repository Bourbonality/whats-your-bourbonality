import { useState, useEffect } from 'react';

import { Flex, Image, Text, Heading } from 'pcln-design-system';
import { socialMediaIcons } from 'mocks';
import { S3_URL } from 'services/constants';
import text from 'services/text';

const BusinessInfo = ({ social, bourbonality }) => {
  const [icons, setIcons] = useState([]);
  const [links, setLinks] = useState();
  const { Common, Footer } = text;

  useEffect(() => {
    const iconsArray = [];
    socialMediaIcons.forEach(async (icon) => {
      iconsArray.push(
        `${S3_URL}/social-media-icons/${social}${
          social === 'white' ? '/' : `/${bourbonality}/`
        }${icon.social}.png`
      );
    });
    setIcons(iconsArray);
    setLinks(socialMediaIcons.map((icons) => icons.link));
  }, [social, bourbonality]);

  return (
    <Flex color='#000000' width='100vw' flexWrap='wrap' justifyContent='center' pt={20} pb={50}>
      <Flex maxWidth='450px' width='100%' flexDirection='column' px={50} color='#FFFFFF'>
        {/* eslint-disable-next-line */}
        <Heading.h2>{Common.whatsYourBourbonality}</Heading.h2>
        <Text mb={3}>{Footer.description}</Text>
        <Text>{Footer.cheers}</Text>
      </Flex>
      <Flex
        width={['100vw', '40vw']}
        minWidth='300px'
        flexDirection="column"
        className="linksToSocialMedia"
        justifyContent="center"
        alignItems="center"
      >
        {/* eslint-disable-next-line */}
        <Heading.h2 color='white'>Follow us on social media!</Heading.h2>
        <Flex flexDirection="row" mt={2} width={2 / 3} alignItems="center">
          {icons.map((icon, i) => {
            return (
              <Flex key={icon} justifyContent='center' width="100%" flex-wrap={true}>
                <a target="_blank" rel="noopener noreferrer" href={links[i]}>
                  <Image src={icon} height="45px" />
                </a>
              </Flex>
            );
          })}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default BusinessInfo;
