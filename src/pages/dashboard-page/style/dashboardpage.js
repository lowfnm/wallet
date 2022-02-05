import styled from "styled-components";
import ellipsePurple from "../icon/ellipse-purple.svg";
import ellipseOrange from "../icon/ellipse-orange.svg";

const HeaderWrapper = styled.div`
    background-color: #fff;
    position: relative;
    z-index: 2;
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
        height: calc(100vh - 8.5rem);
        width: 1px;
        background-color: #e7e5f2;
        box-shadow: -1px 0 0 rgba(0, 0, 0, 0.05),
            1px 0 0 rgba(255, 255, 255, 0.6);
    }
`;
const Main = styled.main`
    position: relative;
    z-index: 1;
    padding-left: 3rem;
`;

const DashBoardPageContainer = styled.div`
    position: relative;
    padding-top: 4.6rem;
    background-color: #e7eaf2;
    height: calc(100vh - 8.5rem);

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
    height: calc(100vh - 13rem);
    position: relative;
`;

export { Aside, Main, DashBoardPageContainer, ContentWrapper, HeaderWrapper };
