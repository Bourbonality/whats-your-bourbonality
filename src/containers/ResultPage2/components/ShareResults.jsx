import React, {useState, useEffect} from 'react';
import { Flex, Box, Text } from 'pcln-design-system';
import { socialMediaIcons } from 'mocks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import {
  faTwitterSquare,
  faFacebookSquare,
} from '@fortawesome/free-brands-svg-icons';

import { TitleText } from 'containers/ResultPage2/styledComponents/ResultPage';
import { HyperLink, SocialLink } from 'containers/ResultPage2/styledComponents/ShareResults';
import { FacebookShareButton, TwitterShareButton } from 'react-share';
import { Section } from 'containers/ResultPage2/components';
import { S3_URL } from 'services/constants';

const ShareResults = ({ social, bourbonality, color, image, description }) => {
  const [icons, setIcons] = useState([]);
  const [links, setLinks] = useState();

  useEffect(() => {
    const filteredIcons = socialMediaIcons.filter(icon => icon.social === 'twitter' || icon.social === 'facebook');
    const iconsArray = filteredIcons.map(icon => 
      `${S3_URL}/social-media-icons/${social}${
        social === 'white' ? '/' : `/${bourbonality}/`
      }${icon.social}.png`
    );
    setIcons(iconsArray);
    setLinks(socialMediaIcons.map((icons) => icons.link));
  }, [social, bourbonality]);

// https://whats-your-bourbonality-assets210734-staging.s3.us-east-2.amazonaws.com/public/social-media-icons/white/facebook.png"
// https://whats-your-bourbonality-assets210734-staging.s3.us-east-2.amazonaws.com/public/social-media-icons/white/twitter.png

  const handleSharing = async () => {
    try {
      await navigator
        .share({
          title: `What's your Bourbonality?`,
          text: `My Boubonality is ${bourbonality}, take the quiz and find out what your Bourbonality is`,
          url: 'https://main.d22f29cfnmwhlj.amplifyapp.com/',
        })
        .then(console.log('Share success'));
    } catch (e) {
      throw e;
    }
  };

  return (
    <Section color={color} className="share-results">
      <TitleText color={color} fontSize={[5, 6, 7]}>
         Share my results
      </TitleText>
      <Flex justifyContent="space-around" p={3}>
        <TwitterShareButton
          url={`https://master.dc2srfrcb0abs.amplifyapp.com/`}
          title={`I am ${bourbonality}, take the quiz and find our what your Boubonality is!`}
          hashtags={['WhatsYourBoubonality?']}
        >
          <SocialLink height={[50, 100]} width={[50, 100]} color={color} justifyContent='center' alignItems='center'>
            <Text fontSize={[57, 115]}>
              <FontAwesomeIcon icon={faTwitterSquare} />
            </Text>
          </SocialLink>
        </TwitterShareButton>
        <FacebookShareButton
          url={`https://master.dc2srfrcb0abs.amplifyapp.com/`}
          quote={`My Bourbonality is ${bourbonality.toUpperCase()}, take the quiz and find out what your Boubonality is!`}
          hashtag="#WhatsYourBourbonality"
          imageUrl={image}
        >
          <SocialLink height={[50, 100]} width={[50, 100]} color={color} justifyContent='center' alignItems='center'>
            <Text fontSize={[57, 115]}>
              <FontAwesomeIcon icon={faFacebookSquare} />
            </Text>
          </SocialLink>
        </FacebookShareButton>
        <HyperLink
          onClick={() => {
            navigator.clipboard.writeText(
              `I am ${bourbonality}, take the quiz and find our what your Bourbonality is! https://master.dc2srfrcb0abs.amplifyapp.com/`
            );
            alert('Copied to clipboard!');
          }}
          height={[50, 100]}
          width={[50, 100]}
          bg={color}
          justifyContent='center'
          alignItems='center'
        >
          <Text fontSize={[5, 7, 8]} color={color}>
            <FontAwesomeIcon color={description.backgroundColor} icon={faLink} />
          </Text>
        </HyperLink>
      </Flex>
    </Section>
  )
  // return (
  //   <Section color={color} className="share-results">
  //     <TitleText color={color} fontSize={[5, 6, 7]}>
  //       Share my results
  //     </TitleText>
  //     <Flex justifyContent="center">
  //       <TwitterShareButton
  //         url={`https://master.dc2srfrcb0abs.amplifyapp.com/`}
  //         title={`I am ${bourbonality}, take the quiz and find our what your Boubonality is!`}
  //         hashtags={['WhatsYourBoubonality?']}
  //       >
  //         <Text fontSize={[6, 7, 8]} mx={10} color={color}>
  //           <FontAwesomeIcon icon={faTwitterSquare} />
  //         </Text>
  //       </TwitterShareButton>
  //       <FacebookShareButton
  //         url={`https://master.dc2srfrcb0abs.amplifyapp.com/`}
  //         quote={`My Bourbonality is ${bourbonality.toUpperCase()}, take the quiz and find out what your Boubonality is!`}
  //         hashtag="#WhatsYourBourbonality"
  //         imageUrl={image}
  //       >
  //         <Text fontSize={[6, 7, 8]} mx={10} color={color}>
  //           <FontAwesomeIcon icon={faFacebookSquare} />
  //         </Text>
  //       </FacebookShareButton>
  //       <Flex
  //         mt='8px'
  //         onClick={() => {
  //           navigator.clipboard.writeText(
  //             `I am ${bourbonality}, take the quiz and find our what your Bourbonality is! https://master.dc2srfrcb0abs.amplifyapp.com/`
  //           );
  //           alert('Copied to clipboard!');
  //         }}
  //       >
  //         <HyperLink
  //           mx={10}
  //           fontSize={[5, 5, 6]}
  //           bg={color}
  //           pt='2px'
  //         >
  //           <FontAwesomeIcon color={description.backgroundColor} icon={faLink} />
  //         </HyperLink>
  //       </Flex>
  //     </Flex>
  //   </Section>
  // );
};

export default ShareResults;
