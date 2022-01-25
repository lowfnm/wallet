import styled from "styled-components";

const NavigationWrapper = styled.div`
    padding-left: 4px;
`;

const NavButton = styled.button`
    margin-left: 2.3rem;
    align-items: center;
    display: flex;

    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 1.8rem;
    line-height: 1.5;
    color: #000000;

    &:hover {
        font-weight: bold;
    }
    &:focus {
        font-weight: bold;
    }
`;

const ItemWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1.9rem;

    opacity: 1;
    &:hover {
        opacity: 0.8;
    }
    &:focus {
        opacity: 0.8;
    }
`;

export { NavigationWrapper, NavButton, ItemWrapper };
