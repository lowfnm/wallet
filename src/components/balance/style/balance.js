import styled from "styled-components";

const StyledBalance = styled.section`
    max-width: 350px;
    margin-top: 3rem;
    border-radius: 30px;
    background-color: #fff;
`;

const BalanceBody = styled.div`
    margin-left: 4rem;
    padding-top: 0.8rem;
    padding-bottom: 1.3rem;
`;

const BalanceTitle = styled.h2`
    margin-bottom: 1rem;
    font-size: 1.2rem;
    line-height: 1.27;
    color: #a6a6a6;
    text-transform: uppercase;
`;

const BalanceTotal = styled.span`
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-size: 3rem;
    line-height: 1.5;
`;

export { StyledBalance, BalanceBody, BalanceTitle, BalanceTotal };

