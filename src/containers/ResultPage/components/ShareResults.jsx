import React from 'react';
import { Flex, Image, Text } from 'pcln-design-system';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import {
  faTwitterSquare,
  faFacebookSquare,
} from '@fortawesome/free-brands-svg-icons';
import { HyperLink, SocialLink } from 'containers/ResultPage/styledComponents/ShareResults';
import { FacebookShareButton, TwitterShareButton } from 'react-share';
import { Section } from 'containers/ResultPage/components';
import { S3_URL, bourbonalityUrl } from 'services/constants';
import text from 'services/text'
import { interpolate, capitalizeFirstLetter } from 'utils';

const ShareResults = ({ bourbonality, color, description }) => {
  const { Share } = text;
  const bourbonalityTitle = capitalizeFirstLetter(bourbonality)

  return (
    <Section color={color} className="share-results">
      <Flex flexDirection='column' alignItems='center'>
        <Image src={`${S3_URL}/titles/share/${bourbonality}.png`} />
        <Flex justifyContent="space-around" alignItems='center' p={3} width={[225, 450]}>
          <TwitterShareButton
            url={bourbonalityUrl}
            title={interpolate(Share.shareAlert, bourbonalityTitle)}
            hashtags={['WhatsYourBoubonality?']}
          >
            <SocialLink height={[50, 100]} width={[50, 100]} color={color} justifyContent='center' alignItems='center'>
              <Text fontSize={[57, 115]}>
                <FontAwesomeIcon icon={faTwitterSquare} />
              </Text>
            </SocialLink>
          </TwitterShareButton>
          <FacebookShareButton
            url={bourbonalityUrl}
            quote={interpolate(Share.shareAlert, bourbonalityTitle)}
            hashtag="#WhatsYourBourbonality"
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
                `${interpolate(Share.shareAlert, bourbonalityTitle)} ${bourbonalityUrl}`
              );
              alert(Share.clipboard);
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
      </Flex>
    </Section>
  )
};

export default ShareResults;
