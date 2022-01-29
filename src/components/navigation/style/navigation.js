import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavigationWrapper = styled.nav``;

export const LinkElem = styled(NavLink)`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

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
`;

const NavText = styled.span`
    margin-left: 2.3rem;
    font-family: "Poppins", sans-serif;
    font-size: 1.8rem;
    line-height: 1.5;
    color: #000;
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
`;

const ItemWrapper = styled.div``;

export { NavigationWrapper, NavText, ItemWrapper, IconWrapper };
