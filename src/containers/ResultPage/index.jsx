import React, { useState, useEffect } from 'react'
import { StyledFlex, Background, StyledImage } from 'containers/ResultPage/styledComponents/ResultPage'
import { S3_URL } from 'services/constants';
import { AnotherRound, BusinessInfo, Description, DiceBox, MerchBox, RecipeBox, ShareResults } from 'containers/ResultPage/components';

const ResultPage = (props) => {
  const { bourbonality, description } = props.bourbonality;

  const [image, setImage] = useState('');

  useEffect(() => {
    setImage(`${S3_URL}/results/${bourbonality}.png`);
  }, [bourbonality]);

  return (
    <>
      <Background justifyContent='center' backgroundColor={description.backgroundColor} height='100%' width='100vw'/>
      <StyledFlex flexDirection="column" alignItems='center' backgroundColor={description.backgroundColor}>
        <StyledImage src={image} />
        <Description {...props.bourbonality} />
        {/* <RecommendationBox {...props.bourbonality} /> */}
        <ShareResults {...props.bourbonality} />
        <DiceBox {...props.bourbonality} />
        <RecipeBox {...props.bourbonality} />
        <MerchBox {...props.bourbonality} />
        <AnotherRound {...props.bourbonality} />
        <BusinessInfo {...props.bourbonality} />
        {/* <Footer {...props.bourbonality} /> */}
      </StyledFlex>
    </>
  )
}

export default ResultPage;
