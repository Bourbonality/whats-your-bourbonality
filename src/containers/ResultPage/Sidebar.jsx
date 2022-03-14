import React, { useState, useEffect } from 'react';
import { Flex, Image, Text } from 'pcln-design-system';
import { socialMediaIcons } from '../../mocks';
import { StyledFlex } from './styledComponents/Sidebar';
import { S3_URL } from '../../services/constants';

const Sidebar = ({ color, social, bourbonality }) => {
  const [showSidebar, setShowSidebar] = useState(false);
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

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) setShowSidebar(true);
    else setShowSidebar(false);
  });

  return (
    <StyledFlex color={color} show={showSidebar} width={60}>
      <Flex
        color={color}
        flexDirection="column"
        justifyContent="center"
        width={1 / 3}
        bg={'#fff'}
      >
        <Text fontSize={4} bold>
          S
        </Text>
        <Text fontSize={4} bold>
          H
        </Text>
        <Text fontSize={4} bold>
          A
        </Text>
        <Text fontSize={4} bold>
          R
        </Text>
        <Text fontSize={4} bold>
          E
        </Text>
      </Flex>

      <Flex flexDirection="column" mt={2} justifyContent="center" width={2 / 3}>
        {icons.map((icon, i) => {
          return (
            <Flex>
              <a href={links[i]}>
                <Image src={icon} width="45px" />
              </a>
            </Flex>
          );
        })}
      </Flex>
    </StyledFlex>
  );
};

export default Sidebar;
