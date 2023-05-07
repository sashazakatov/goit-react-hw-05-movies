import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  align-items: center;
  box-shadow: 0px 1px 3px rgba(0,0,0,.12), 0px 1px 1px rgba(0,0,0,.14), 0px 2px 1px rgba(0,0,0,.2);
  padding: 12px 15px;
` 

export const Navigation = styled.nav`
    display: flex;
    gap: 15px;
    color: black;
`

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;

export const Section = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 30px 15px;
  box-shadow: 0px 1px 3px rgba(0,0,0,.12), 0px 1px 1px rgba(0,0,0,.14);
`
