import styled from "styled-components";
import ellipse from "../icon/ellipse-purple.svg";

const Hero = styled.div`
    position: relative;
    width: 45%;
    height: 100vh;
    overflow: hidden;
    background: #e7eaf2;
    padding-right: 75px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &::after {
        content: "";
        position: absolute;
        z-index: 1;
        bottom: 0;
        left: 0;
        width: 618px;
        height: 547px;
        background-image: url(${ellipse});
        background-size: 618px 547px;
        background-repeat: no-repeat;
    }
`;

const HeroWrapper = styled.div`
    position: relative;
    z-index: 2;
    width: 440px;
    margin-left: auto;
`;

const HeroImage = styled.img`
    display: block;
    margin-bottom: 30px;
`;

const HeroText = styled.div`
    color: #000;
    font-size: 3rem;
    font-family: "Poppins", sans-serif;
    text-align: center;
`;

export { HeroText, HeroImage, Hero, HeroWrapper };
