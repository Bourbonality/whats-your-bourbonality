import React from 'react';
import { Flex, Text } from 'pcln-design-system';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitterSquare,
  faFacebookSquare,
  faInstagramSquare,
} from '@fortawesome/free-brands-svg-icons';
import { TitleText } from './styledComponents/ResultPage';
import { faSms, faLink } from '@fortawesome/free-solid-svg-icons';
import { FacebookShareButton, TwitterShareButton } from 'react-share';
import Section from './Section';
import { detectMob } from '../../utils/isMobile';

const ShareResults = ({ bourbonality, color, image }) => {
  const handleSharing = async () => {
    try {
      await navigator
        .share({
          title: 'See cool stuff',
          text: 'Really awesome thing you need to see right meow',
          url: 'http://ionicframework.com/',
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
        {detectMob() ? (
          <button onClick={handleSharing}> Test Share Button</button>
        ) : (
          <>
            {' '}
            <TwitterShareButton>
              <Text fontSize={[6, 7, 8]} mx={10} color={color}>
                <FontAwesomeIcon icon={faTwitterSquare} />
              </Text>
            </TwitterShareButton>
            <FacebookShareButton
              url={`https://master.dc2srfrcb0abs.amplifyapp.com/`}
              quote={`My Bourbonality is ${bourbonality.toUpperCase()}, take this quiz and find out what your Boubonality is! `}
              hashtag="#WhatsYourBourbonality"
              imageUrl={image}
            >
              <Text fontSize={[6, 7, 8]} mx={10} color={color}>
                <FontAwesomeIcon icon={faFacebookSquare} />
              </Text>
            </FacebookShareButton>
            <Text fontSize={[6, 7, 8]} mx={10} color={color}>
              <FontAwesomeIcon icon={faInstagramSquare} />
            </Text>
            <Text fontSize={[6, 7, 8]} mx={10} color={color}>
              <FontAwesomeIcon icon={faSms} />
            </Text>
            <Text fontSize={[6, 7, 8]} mx={10} color={color}>
              <FontAwesomeIcon icon={faLink} />
            </Text>
          </>
        )}
      </Flex>
    </Section>
  );
};

export default ShareResults;
