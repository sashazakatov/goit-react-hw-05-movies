import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

export const BackLink = styled(NavLink)`
    padding: 4px 8px;
    border-radius: 4px;
    color: white;
    font-weight: 500;
    background-color: orangered;
`
export const Links = styled(Link)`
    padding: 4px 8px;
    border-radius: 4px;
    color: white;
    font-weight: 500;
    background-color: orangered;
    margin: 0px 5px;
`
export const Title = styled.h1`
    text-align: center;
    font-size: 25px;
`
export const InformationMovie = styled.div`
    display: flex;
    flex-wrap: nowrap ;
    justify-content: center;
    align-items: center;
    gap : 10px;
`
export const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Span = styled.span`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`