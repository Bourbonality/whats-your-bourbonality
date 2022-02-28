import React, { useState, useEffect } from 'react';
import { Flex, Image, Text } from 'pcln-design-system';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitterSquare,
  faFacebookSquare,
  faInstagramSquare,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare, faLink } from '@fortawesome/free-solid-svg-icons';
import Section from './Section';

const ShareResults = ({ bourbonality, color }) => {
  return (
    <Section color={color} className="share-results">
      <Text fontSize={6} color={color}>
        SHARE MY RESULTS
      </Text>
      <Flex justifyContent="center">
        <Text fontSize={8} mx={10} color={color}>
          <FontAwesomeIcon icon={faTwitterSquare} />
        </Text>
        <Text fontSize={8} mx={10} color={color}>
          <FontAwesomeIcon icon={faFacebookSquare} />
        </Text>
        <Text fontSize={8} mx={10} color={color}>
          <FontAwesomeIcon icon={faInstagramSquare} />
        </Text>
        <Text fontSize={8} mx={10} color={color}>
          <FontAwesomeIcon icon={faEnvelopeSquare} />
        </Text>
        <Text fontSize={8} mx={10} color={color}>
          <FontAwesomeIcon icon={faLink} />
        </Text>
      </Flex>
    </Section>
  );
};

export default ShareResults;
