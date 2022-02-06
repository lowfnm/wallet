import styled from "styled-components";
import ellipsePurple from "../icon/ellipse-purple.svg";
import ellipseOrange from "../icon/ellipse-orange.svg";

const PageContainer = styled.div`
    position: relative;
    display: flex;

    &::before {
        content: "";
        position: absolute;
        z-index: 1;
        bottom: 0;
        left: 0;
        width: 618px;
        height: 547px;
        background-image: url(${ellipsePurple});
        background-size: 618px 547px;
        background-repeat: no-repeat;

        @media (max-width: 767px) {
            content: none;
        }
    }

    &::after {
        content: "";
        position: absolute;
        z-index: 1;
        top: 0;
        right: 0;
        width: 618px;
        height: 547px;
        background-image: url(${ellipseOrange});
        background-size: cover;
        background-repeat: no-repeat;
        filter: blur(50px);

        @media (max-width: 1279px) {
            filter: none;
        }
        @media (max-width: 767px) {
            content: none;
        }
    }
    @media (max-width: 1279px) {
        flex-direction: column;
    }
`;

export { PageContainer };
