import styled from "styled-components";

const Hero = styled.div`
    position: relative;
    width: 45%;
    height: 100vh;
    background: #e7eaf2;
    padding-right: 7.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 1279px) {
        width: 100%;
        height: auto;
        padding-top: 6rem;
        padding-right: 0;
    }
    @media (max-width: 767px) {
        display: none;
    }
`;

const HeroWrapper = styled.div`
    position: relative;
    z-index: 2;
    width: 440px;
    margin-left: auto;

    @media (max-width: 1279px) {
        display: flex;
        align-items: center;
        width: auto;
        margin: 0 auto;
    }
    @media (max-width: 767px) {
        display: none;
    }
`;

const HeroImage = styled.img`
    display: block;
    margin-bottom: 30px;

    @media (max-width: 1279px) {
        width: 260px;
        margin-bottom: 0;
        padding-right: 3rem;
    }
`;

const HeroText = styled.div`
    color: #000;
    font-size: 3rem;
    font-family: "Poppins", sans-serif;
    text-align: center;
`;

export { HeroText, HeroImage, Hero, HeroWrapper };
