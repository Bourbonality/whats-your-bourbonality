import React, { useState, useEffect } from 'react';
import { Flex, Image, Text } from 'pcln-design-system';
import RecipeBox from './RecipeBox';
import Footer from './Footer';
import DiceBox from './DiceBox';
import MerchBox from './MerchBox';
import BusinessInfo from './BusinessInfo';
import ShareResults from './ShareResults';
import {
  Section,
  StyledFlex,
  Description,
  TitleText,
  FooterSection,
} from './styledComponents/ResultPage';
import { S3_URL } from '../../services/constants';

const ResultPage = (props) => {
  const {
    bourbonality,
    description,
    subtitle,
    drink,
    recommendations,
    color,
    secondary,
  } = props.bourbonality;

  const [image, setImage] = useState('');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    window.setTimeout(() => setLoaded(true), 3000);
  }, []);

  useEffect(() => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      setImage(`${S3_URL}/results/mobile/${bourbonality}.png`);
    } else {
      setImage(`${S3_URL}/results/${bourbonality}.png`);
    }
  }, [bourbonality]);

  return (
    <StyledFlex
      flexDirection="column"
      backgroundColor={description.backgroundColor}
      pb={5}
      loaded={loaded}
    >
      {/* <Sidebar color={color} social={social} bourbonality={bourbonality} /> */}

      <Image src={image} />
      <Description flexDirection="column" justifyContent="center">
        <TitleText color={color} fontSize={[4, 5, 6]}>
          {subtitle}
        </TitleText>
        <Text
          color="white"
          fontSize={[2, 3, 4]}
          lineHeight={['20px', '30px', '40x']}
          m="10px"
          textAlign="center"
          px={20}
        >
          {description.text}
        </Text>
      </Description>

      {/* Recommendations */}
      {/*<Section mb={-6}>*/}
      {/*  <RecommendationBox*/}
      {/*    bourbonality={bourbonality}*/}
      {/*    recommendations={recommendations}*/}
      {/*    color={color}*/}
      {/*  />*/}
      {/*</Section>*/}

      {/* Share Results */}
      <Section>
        <ShareResults
          bourbonality={bourbonality}
          color={color}
          image={image}
          backgroundColor={description.backgroundColor}
        />
      </Section>

      {/* Dice */}
      <Section>
        <DiceBox
          bourbonality={bourbonality}
          color={color}
          recommendations={recommendations}
        ></DiceBox>
      </Section>

      {/* Recipe */}
      <Section>
        <RecipeBox
          color={color}
          drink={drink}
          bourbonality={bourbonality}
        ></RecipeBox>
      </Section>

      {/* Merch */}
      <Section>
        <MerchBox color={color} bourbonality={bourbonality}></MerchBox>
      </Section>

      {/* Footer Section */}
      <FooterSection>
        <BusinessInfo color={color} secondary={secondary} />
      </FooterSection>

      {/* E-mail pop-up */}
      <Flex width="100vw" justifyContent="center">
        <Footer color={color} secondary={secondary} />
      </Flex>
    </StyledFlex>
  );
};

export default ResultPage;
