import React, { useState } from 'react';
import ResultPage from '../ResultPage';
import { Slide, LoadingPage, ProgressBar } from '../../components';
import { results, slideData } from '../../mocks';
import { ShowResultsButton, NextButton } from './styledComponents/Quiz';

const Quiz = () => {
  const [slideNum, setSlideNum] = useState(0);

  const [count, setCount] = useState(0);
  const [bourbonality, setBourbonality] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const showResults = () => {
    setShowResult(!showResult);
    setBourbonality(results[0]);
  };

  console.log(showResult);
  console.log(bourbonality);
  console.log(count);
  console.log(process.env.NODE_ENV);

  return (
    <>
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
        Page
        showLoading={!!bourbonality}
        showResult={showResult}
        setShowResult={setShowResult}
      />
      {bourbonality && showResult && (
        <ResultPage
          count={count}
          bourbonality={bourbonality}
          setBourbonality={setBourbonality}
          showResult={showResult}
        />
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
    </>
  );
};

export default Quiz;
