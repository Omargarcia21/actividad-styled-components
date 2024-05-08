import React from 'react';
import styled, { keyframes } from 'styled-components'

const Title = styled.h2`
    text-align: center;
    font-weight: bold;
    font-size: 25px;
`

const MovieGrid = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px,1fr));
    gap: 20px;
`

const MovieCard = styled.article`
    background-color: #f0f0f0;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1)
    overflow: hidden;

    &:hover{
        transform: translateY(-10px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
`
const MovieImage = styled.img`
    width: 100%;
    height: 0 auto;
`
const MovieTitle = styled.h3`
    font-size: 19px;
    font-weight: bold;
    margin: 10px;
`
const MovieDate = styled.p`
    font-size: 14px;
    margin: 0 10px 10px;
`

const Rotate = keyframes`
    from {
        tranform: rotate(0deg);
    }
    to {
        tranform: rotate(360deg);
    }
`

const LoadingSpinner = styled.div`
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-left-color: #007bff;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: ${Rotate} 1s linear infinite;
`
const LoadingText = styled.p`
    font-size: 18px;
    color: #333;
`
const LoadingContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`

export {
    Title,
    MovieGrid,
    MovieCard,
    MovieImage,
    MovieTitle,
    MovieDate,
    LoadingSpinner,
    LoadingText,
    LoadingContainer,
}