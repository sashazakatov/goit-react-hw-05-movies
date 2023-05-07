import styled from "styled-components";

export const Forminput = styled.input`
    font-weight: 500;
    padding: 4px 8px;
    border-radius: 4px;
    border-color: black;
    font-weight: 500;   
    height: 16px;
    width: 325px;
    &:hover {
        border-color: orangered;
    }
    &:focus{
        border-color: orangered;
    }
`

export const FormButton = styled.button`
    height: 28px;
    font-weight: 500;
    padding: 4px 8px;
    border-radius: 4px;
    border: none;
    color: white;
    background-color: orangered;
`
