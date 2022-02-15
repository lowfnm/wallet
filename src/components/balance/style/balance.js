import styled from "styled-components";

const StyledBalance = styled.section`
    width: 100%;
    max-width: 350px;
    margin-top: 3rem;
    border-radius: 30px;
    background-color: #fff;
    @media (max-width: 767px) {
        max-width: 350px;
        margin: 0 auto;
        width: 100%;
        display: none;
    }
`;

const BalanceBody = styled.div`
    padding: 0.8rem 4rem 1.3rem;
    min-width: 100%;

    @media (max-width: 767px) {
        padding: 1rem 4rem 1rem 3rem;
    }
`;

const BalanceTitle = styled.h2`
    margin-bottom: 1rem;
    font-size: 1.2rem;
    font-family: "Abel", sans-serif;
    font-weight: 400;
    line-height: 1.27;
    color: #a6a6a6;
    text-transform: uppercase;
`;

const BalanceTotal = styled.div`
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-size: 3rem;
    line-height: 1.5;
    overflow-x: auto;
`;

export { StyledBalance, BalanceBody, BalanceTitle, BalanceTotal };
