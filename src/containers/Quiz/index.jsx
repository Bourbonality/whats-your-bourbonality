import React, { useEffect, useState } from 'react';
import { Flex } from 'pcln-design-system';
import ResultPage from 'containers/ResultPage';
import { Slide, LoadingPage, ProgressBar } from 'components';
import { results, slideData } from 'mocks';
import { ShowResultsButton, NextButton } from 'containers/Quiz/styledComponents/Quiz';

const Quiz = () => {
  const [slideNum, setSlideNum] = useState(0);

  const [count, setCount] = useState(0);
  const [bourbonality, setBourbonality] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [loadResult, setLoadResult] = useState(false);

  useEffect(() => {
    if (!showResult) document.body.style.overflow = 'hidden';
  
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showResult]);

  const showResults = () => {
    setShowResult(!showResult);
    setBourbonality(results[0]);
  };

  return (
    <Flex justifyContent='center'>
      {process.env.NODE_ENV === 'development' ? (
        <ShowResultsButton onClick={showResults}>
          {showResult ? 'Hide Results' : 'Show Results'}
        </ShowResultsButton>
      ) : (
        <></>
      )}

      {process.env.NODE_ENV === 'development' && showResult ? (
        <NextButton
          bourbonality={bourbonality}
          onClick={() => {
            setSlideNum(slideNum + 1);
            setBourbonality(results[(slideNum + 1) % 8]);
          }}
        >
          Next slide
        </NextButton>
      ) : (
        <></>
      )}

      <LoadingPage
        showLoading={!!bourbonality}
        showResult={showResult}
        setShowResult={setShowResult}
        setLoadResult={setLoadResult}
      />
      {bourbonality && loadResult && (
        <ResultPage bourbonality={bourbonality} />
      )}
      <ProgressBar count={count} slides={slideData} />
      {!showResult &&
        slideData.map((data, i) => {
          return (
            <Slide
              key={i}
              i={i}
              count={count}
              slide={data}
              setCount={setCount}
              setBourbonality={setBourbonality}
            />
          );
        })}
    </Flex>
  );
};

export default Quiz;
