import styled from "styled-components";
import ellipsePurple from "../icon/ellipse-purple.svg";
import ellipseOrange from "../icon/ellipse-orange.svg";

const HeaderWrapper = styled.div`
    background-color: #fff;
    position: relative;
    z-index: 1;
`;

const Aside = styled.aside`
    padding-right: 3rem;
    position: relative;

    &::after {
        content: "";
        position: absolute;
        right: 0;
        top: -4.6rem;
        bottom: 0;
        width: 1px;
        height: calc(100vh - 9rem);
        background-color: #e7e5f2;
        box-shadow: -1px 0px 0px rgba(0, 0, 0, 0.05),
            1px 0px 0px rgba(255, 255, 255, 0.6);

        @media (max-width: 1279px) {
            content: none;
        }
    }

    @media (max-width: 1279px) {
        display: flex;
        justify-content: center;
        padding-right: 0;
        margin-bottom: 4rem;
        position: relative;
        z-index: 1;
    }
`;

const NavigationWrapper = styled.div`
    @media (max-width: 1279px) {
        width: 40%;
        margin-right: 2rem;
    }
`;

const Main = styled.main`
    position: relative;
    z-index: 1;
    padding-left: 3rem;

    @media screen and (max-width: 767px) {
        padding-left: 0;
    }
`;

const DashBoardPageContainer = styled.div`
    position: relative;
    padding-top: 4.6rem;
    background-color: #e7eaf2;
    min-height: calc(100vh - 9rem);
    overflow: hidden;

    &::before {
        content: "";
        position: absolute;
        z-index: 0;
        bottom: 0;
        left: 0;
        width: 618px;
        height: 547px;
        background-image: url(${ellipsePurple});
        background-size: 618px 547px;
        background-repeat: no-repeat;
        filter: blur(50px);
    }

    &::after {
        content: "";
        position: absolute;
        z-index: 0;
        top: 0;
        right: 0;
        width: 618px;
        height: 547px;
        background-image: url(${ellipseOrange});
        background-size: 618px 547px;
        background-repeat: no-repeat;
        filter: blur(50px);
    }
`;

const ContentWrapper = styled.div`
    display: flex;
    position: relative;

    @media (max-width: 1279px) {
        flex-direction: column;
    }
`;

export {
    Aside,
    Main,
    DashBoardPageContainer,
    ContentWrapper,
    HeaderWrapper,
    NavigationWrapper,
};
