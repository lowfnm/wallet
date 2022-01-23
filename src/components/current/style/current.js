import styled from "styled-components";

const Rates = styled.article`
    max-width: 348px;
    font-family: "Abel", sans-serif;
    font-style: normal;
    font-weight: 400;
    color: white;
    background-color: #4a56e2;
    border: 1px solid #000;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;

const RatesHead = styled.ul`
    display: flex;
    justify-content: space-between;
    padding: 1.7rem 0 2rem;
    background-color: #6f78ec;
`;

const HeadItem = styled.li`
    font-size: 1.8rem;
    line-height: 1.27;

    &:first-child {
        margin-left: 3rem;
    }

    &:last-child {
        margin-right: 3rem;
    }
`;

const RatesBody = styled.ul`
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
    margin-bottom: 1.9rem;
`;

const BodyItem = styled(HeadItem)`
    font-size: 1.6rem;
    line-height: 1.25;
`;

export { Rates, RatesHead, HeadItem, RatesBody, BodyItem };
