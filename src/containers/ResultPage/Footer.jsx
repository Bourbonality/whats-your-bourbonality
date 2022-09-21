import React, { useState } from 'react';
import { Flex, Text } from 'pcln-design-system';
import {
  StyledButton,
  StyledFooter,
  StyledInput,
} from 'containers/ResultPage/styledComponents/Footer';

const Footer = ({ color, secondary }) => {
  const [showButton, setShowButton] = useState(0);
  const [showFooter, setShowFooter] = useState(false);
  const [manualShowFooter, setManualShowFooter] = useState(true);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      setShowFooter(true);
      setShowButton(25);
    } else {
      setShowFooter(false);
      setShowButton(0);
    }
  });

  return (
    <StyledFooter
      show={showFooter && manualShowFooter}
      showButton={showButton}
      color={color}
    >
      <Flex width="100%" justifyContent="center" alignItems="center">
        <Flex pb={3} px={3} flexDirection="column" mr={0}>
          <StyledButton onClick={() => setManualShowFooter(!manualShowFooter)}>
            <Text fontSize={1} color={secondary}>
              {showFooter && manualShowFooter ? 'Hide X' : 'Show ^'}
            </Text>
          </StyledButton>
          <Text fontSize={1} color={secondary}>
            Sign up for our newsletter for a chance to win a free t-shirt!
          </Text>
          <StyledInput type="email" id="email" placeholder="your email" />
        </Flex>
      </Flex>
    </StyledFooter>
  );
};

export default Footer;
