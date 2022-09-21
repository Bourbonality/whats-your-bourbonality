import React from 'react';
import { Flex, Text } from 'pcln-design-system';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import {
  faTwitterSquare,
  faFacebookSquare,
} from '@fortawesome/free-brands-svg-icons';

import { TitleText } from 'containers/ResultPage2/styledComponents/ResultPage';
import { HyperLink } from 'containers/ResultPage2/styledComponents/ShareResults';
import { FacebookShareButton, TwitterShareButton } from 'react-share';
import { Section } from 'containers/ResultPage2/components';
import { detectMob } from 'utils/isMobile';

const ShareResults = ({ bourbonality, color, image, description }) => {

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
      <Flex justifyContent="center">
        {detectMob() && navigator.share ? (
          <button onClick={handleSharing}> Test Share Button</button>
        ) : (
          <>
            <TwitterShareButton
              url={`https://master.dc2srfrcb0abs.amplifyapp.com/`}
              title={`I am ${bourbonality}, take the quiz and find our what your Boubonality is!`}
              hashtags={['WhatsYourBoubonality?']}
            >
              <Text fontSize={[6, 7, 8]} mx={10} color={color}>
                <FontAwesomeIcon icon={faTwitterSquare} />
              </Text>
            </TwitterShareButton>
            <FacebookShareButton
              url={`https://master.dc2srfrcb0abs.amplifyapp.com/`}
              quote={`My Bourbonality is ${bourbonality.toUpperCase()}, take the quiz and find out what your Boubonality is!`}
              hashtag="#WhatsYourBourbonality"
              imageUrl={image}
            >
              <Text fontSize={[6, 7, 8]} mx={10} color={color}>
                <FontAwesomeIcon icon={faFacebookSquare} />
              </Text>
            </FacebookShareButton>
            <Flex
              mt='8px'
              height='42px'
              onClick={() => {
                navigator.clipboard.writeText(
                  `I am ${bourbonality}, take the quiz and find our what your Bourbonality is! https://master.dc2srfrcb0abs.amplifyapp.com/`
                );
                alert('Copied to clipboard!');
              }}
            >
              <HyperLink
                mx={10}
                fontSize={[5, 5, 6]}
                bg={color}
                pt='2px'
              >
                  <FontAwesomeIcon color={description.backgroundColor} icon={faLink} />
              </HyperLink>
            </Flex>
          </>
        )}
      </Flex>
    </Section>
  );
};

export default ShareResults;
