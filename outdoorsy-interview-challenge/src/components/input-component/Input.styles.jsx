import styled from "styled-components";
import {AiOutlineCloseCircle} from 'react-icons/ai';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const InputFieldWrapper = styled.div`
    border: 2px solid #D1D5DB;
    border-radius: 10px;
    margin: .3rem;
    height: 4rem;
    width: 90%;
    display: flex;
    align-items: center;
    display: flex;
    justify-content: space-around;
`

export const InputField = styled.input`
    border: none;
    font-size: 1.5rem;
    width: 75%;

    &:focus{
        outline: none;
    }
`

export const ClearIcon = styled(AiOutlineCloseCircle)`
    transform: scale(2);
    color: #D1D5DB;

    &:hover{
        color: black;
        cursor: pointer;
    }
`

export const CampersCount = styled.p`
    font-size: 1.2rem;
    color: #D1D5DB;
`