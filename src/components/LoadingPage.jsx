import React, { useEffect } from 'react'
import { LoadingContainer, StyledVideo } from './styledComponents/LoadingPage'

const LoadingPage = ({ showResult, showLoading, setShowResult }) => {
    useEffect(() => {
        if (showLoading) window.setTimeout(() => setShowResult(true), 4000)
    }, [showLoading])

    return (
        <LoadingContainer
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            showLoading={showLoading}
            showResult={showResult}
        >
            <StyledVideo muted autoPlay loop playsInline>
                <source src='https://bourbonality-content-bucket201829-staging.s3.us-east-2.amazonaws.com/public/loading-screen-blk.mp4' type='video/mp4' />
            </StyledVideo>
        </LoadingContainer>
    )
}

export default LoadingPage
