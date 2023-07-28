import styled from "styled-components";

export const Nav = styled.nav`
    background: #FFF;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    font-family: 'Open Sans';
    font-style: normal;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`


export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: 24px;
    font-size: 1.1rem;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
`

export const NavLinks = styled.div`
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1.0rem;
    height: 100%;
    cursor: pointer;
    color: #1E5387;

    &:hover {
        color: #47B5FF;
        transition: 0.2s ease-in-out;
    }

    &:active {
        border-bottom: 3px solid #06283D;
    }
`
