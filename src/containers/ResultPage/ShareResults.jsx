import React, { useState, useEffect } from 'react';
import { Flex, Image, Text } from 'pcln-design-system';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitterSquare,
  faFacebookSquare,
  faInstagramSquare,
} from '@fortawesome/free-brands-svg-icons';
import { TitleText } from './styledComponents/ResultPage';
import { faSms, faLink } from '@fortawesome/free-solid-svg-icons';
import Section from './Section';

const ShareResults = ({ bourbonality, color }) => {
  return (
    <Section color={color} className="share-results">
      <TitleText color={color} fontSize={[5, 6, 7]}>
        Share my results
      </TitleText>
      <Flex justifyContent="center">
        <Text fontSize={[6, 7, 8]} mx={10} color={color}>
          <FontAwesomeIcon icon={faTwitterSquare} />
        </Text>
        <Text fontSize={[6, 7, 8]} mx={10} color={color}>
          <FontAwesomeIcon icon={faFacebookSquare} />
        </Text>
        <Text fontSize={[6, 7, 8]} mx={10} color={color}>
          <FontAwesomeIcon icon={faInstagramSquare} />
        </Text>
        <Text fontSize={[6, 7, 8]} mx={10} color={color}>
          <FontAwesomeIcon icon={faSms} />
        </Text>
        <Text fontSize={[6, 7, 8]} mx={10} color={color}>
          <FontAwesomeIcon icon={faLink} />
        </Text>
      </Flex>
    </Section>
  );
};

export default ShareResults;
