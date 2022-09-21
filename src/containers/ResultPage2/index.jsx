import React, { useState, useEffect } from 'react'
import { StyledFlex, Background, StyledImage } from 'containers/ResultPage2/styledComponents/ResultPage'
import { S3_URL } from 'services/constants';
import { Description, DiceBox, MerchBox, RecipeBox, ShareResults } from 'containers/ResultPage2/components';

const ResultPage2 = (props) => {
  const { bourbonality, description } = props.bourbonality;

  const [image, setImage] = useState('');

  useEffect(() => {
    setImage(`${S3_URL}/results/${bourbonality}.png`);
  }, [bourbonality]);

  return (
    <>
      <Background justifyContent='center' backgroundColor={description.backgroundColor} height='100vh' width='100vw'/>
      <StyledFlex flexDirection="column" alignItems='center' backgroundColor={description.backgroundColor}>
        <StyledImage src={image} />
        <Description {...props.bourbonality} />
        <ShareResults {...props.bourbonality} />
        <DiceBox {...props.bourbonality} />
        <RecipeBox {...props.bourbonality} />
        <MerchBox {...props.bourbonality} />
      </StyledFlex>
    </>
  )
}

export default ResultPage2;
