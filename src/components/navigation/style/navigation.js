import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Nav = styled.nav`
    @media (max-width: 767px) {
        display: flex;
        justify-content: center;
        margin-bottom: 1.3rem;
    }
`;

export const LinkElem = styled(NavLink)`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    width: fit-content;

    &:last-child {
        display: none;
    }

    &.active > div {
        background-color: #4d57e6;
        filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
    }

    &:last-child {
        margin-bottom: 0;
    }
    &.active span {
        font-weight: 700;
    }
    @media (max-width: 767px) {
        margin-bottom: 0;
        &:not(:last-child) {
            margin-right: 36px;
        }
        &:last-child {
            display: block;
        }
    }
`;

const NavText = styled.span`
    margin-left: 2.3rem;
    font-family: "Poppins", sans-serif;
    font-size: 1.8rem;
    line-height: 1.5;
    color: #000;
    @media (max-width: 767px) {
        display: none;
    }
`;

const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    background-color: #6f78ec;
    border-radius: 2px;

    svg {
        fill: #fff;
    }
    @media (max-width: 767px) {
        width: 38px;
        height: 38px;
        svg {
            width: 26px;
            height: 26px;
        }
    }
`;

const ItemWrapper = styled.div``;

export { Nav, NavText, ItemWrapper, IconWrapper };
