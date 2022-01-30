import styled from "styled-components";

const Section = styled.section``;

const Title = styled.h1`
    font-family: "Poppins", sans-serif;
    font-weight: inherit;
    font-size: 3rem;
    line-height: 1.5;
`;

const Wrapper = styled.div`
    position: relative;
    max-width: 320px;
    max-height: 320px;
    margin-top: 2rem;
`;

const ExpensesMoney = styled.span`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.8rem;
    line-height: 1.27;
`;

export { Section, Title, Wrapper, ExpensesMoney };
