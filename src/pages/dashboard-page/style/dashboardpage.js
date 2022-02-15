import styled from "styled-components";
import ellipsePurple from "../icon/ellipse-purple.svg";
import ellipseOrange from "../icon/ellipse-orange.svg";

const HeaderWrapper = styled.div`
    background-color: #fff;
    position: relative;
    z-index: 1;

    @media screen and (max-width: 767px) {
        position: sticky;
        top: 0;
        z-index: 9999;
    }
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
    @media (max-width: 767px) {
        margin-bottom: 3.3rem;
        & > section:last-child {
            display: none;
        }
        & > div {
            width: 100%;
        }
    }
`;

const NavigationWrapper = styled.div`
    @media (max-width: 1279px) {
        width: 40%;
        margin-right: 2rem;
    }
    @media (max-width: 767px) {
        width: 100%;
        margin-right: 0;
    }
`;

const Main = styled.main`
    width: 100%;
    position: relative;
    z-index: 1;
    padding-left: 3rem;

    @media (max-width: 1279px) {
        padding-left: 0;
        min-height: calc(100vh - 16rem);
        max-width: 800px;
        margin: 0 auto;
    }
    @media (max-width: 767px) {
        width: 100%;
    }
`;

const DashBoardPageContainer = styled.div`
    position: relative;
    padding-top: 4.6rem;
    background-color: #e7eaf2;
    min-height: calc(100vh - 9rem);
    overflow: hidden;

    @media (max-width: 767px) {
        padding-top: 1.5rem;
        min-height: calc(100vh - 6rem);
    }

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

        @media (max-width: 767px) {
            content: none;
        }
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

        @media (max-width: 767px) {
            content: none;
        }
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
