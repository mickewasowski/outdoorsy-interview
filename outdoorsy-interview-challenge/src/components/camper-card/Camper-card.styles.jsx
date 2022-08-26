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

export const Heading = styled.h3`
    color: #56606D;
`