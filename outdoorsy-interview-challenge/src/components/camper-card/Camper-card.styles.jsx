import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    gap: 1.2rem;
    margin: 1rem 0;
    align-items: center;
    border-radius: 10px;

    &:hover{
        background-color: #D1D5DB;
        cursor: pointer;
    }

    @media (min-width: 320px) AND (max-width: 1024px){
        flex-direction: column;
        width: 100%;
        gap: .7rem;
    }
`

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
`

export const Image = styled.img`
    width: 9rem;
    height: 6rem;
    border-radius: 10px;
`

export const DetailsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 40%;

    @media (min-width: 320px) AND (max-width: 1024px){
        width: 100%;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: space-between;
    }
`

export const Heading = styled.h3`
    color: #56606D;

    @media (min-width: 320px) AND (max-width: 1024px){
        text-align: center;
        margin-bottom: 0;
    }
`