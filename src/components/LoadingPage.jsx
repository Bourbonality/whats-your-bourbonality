import React, { useEffect } from 'react'
import { LoadingContainer, StyledVideo } from './styledComponents/LoadingPage'
import { S3_URL } from '../services/constants'

const LoadingPage = ({ showResult, setLoadResult, showLoading, setShowResult }) => {
    useEffect(() => {
        if (showLoading) {
            window.setTimeout(() => setLoadResult(true), 1000)
            window.setTimeout(() => setShowResult(true), 5000)
        }
    }, [showLoading, setShowResult, setLoadResult])

    return (
        <LoadingContainer
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            showLoading={showLoading}
            showResult={showResult}
        >
            <StyledVideo muted autoPlay loop playsInline>
                <source src={`${S3_URL}/loading-screen-blk.mp4`} type='video/mp4' />
            </StyledVideo>
        </LoadingContainer>
    )
}

export default LoadingPage
