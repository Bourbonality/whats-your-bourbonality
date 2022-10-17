import { useState, useEffect } from 'react';

import { Flex, Image, Text, Heading } from 'pcln-design-system';
import { socialMediaIcons } from 'mocks';
import { S3_URL } from 'services/constants';

const BusinessInfo = ({ social, bourbonality }) => {
  const [icons, setIcons] = useState([]);
  const [links, setLinks] = useState();

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
    <Flex bg='#000000' width='100vw' flexWrap='wrap' justifyContent='center' mt={75} py={25}>
      <Flex maxWidth='450px' width='100%' flexDirection='column' pr={50} pl={50} color='#FFFFFF'>
        <Heading.h2>What's your Bourbonality</Heading.h2>
        <Text>
          A place for anyone who wants to learn more about bourbon. Follow us &
          begin developing your Bourbonality™ today!
        </Text>
        <Text>Cheers! 🥃🥃🥃</Text>
      </Flex>
      <Flex
        width='40vw'
        minWidth='300px'
        flexDirection="column"
        className="linksToSocialMedia"
        justifyContent="center"
        alignItems="center"
        pr={10}
      >
        <Heading.h2 color='white'>Follow us on social media!</Heading.h2>
        <Flex flexDirection="row" mt={2} width={2 / 3} alignItems="center">
          {icons.map((icon, i) => {
            return (
              <Flex width="100%" flex-wrap={true}>
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
