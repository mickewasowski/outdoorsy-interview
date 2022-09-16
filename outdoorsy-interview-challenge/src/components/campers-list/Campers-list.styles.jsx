import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    justify-self: center;
    align-self: center;
`

export const InputWrapper = styled.div`
    align-self: center;
    align-items: center;
    display: flex;
    width: 50%;
    justify-content: space-around;

    @media (min-width: 320px) AND (max-width: 1024px){
        flex-direction: column;
        width: 100%;
    }
`

export const Input = styled.input`
    border: 1px solid #56606D;
    border-radius: 5px;
    height: 1.5rem;
    width: 9rem;

    &:focus{
        outline: none;
    }

    @media (min-width: 320px) AND (max-width: 1024px){
        width: 100%;
        margin: .5rem 0;
        height: 2rem;
    }
`

export const NoResults = styled.p`
    font-size: 3rem;
    color: #56606D;
    text-align: center;
`