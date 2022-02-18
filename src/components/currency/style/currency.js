import styled from "styled-components";

const Rates = styled.section`
    margin-top: 3rem;
    width: 348px;
    position: relative;
    height: 347px;
    color: white;
    background-color: #4a56e2;
    border-radius: 30px;
    @media (max-width: 1279px) {
        margin-top: 0;
        height: 200px;
        svg {
            position: absolute;
            bottom: 0;
        }
    }
    @media (max-width: 767px) {
        margin: 0 auto;
        width: 100%;
        max-width: 320px;
    }
`;

const RatesHead = styled.ul`
    display: flex;
    justify-content: space-between;
    padding: 1.7rem 3rem 2rem;
    border-radius: 30px 30px 0 0;
    background-color: #6f78ec;
`;
const RatesContent = styled.ul`
    position: relative;
    min-height: calc(100% - 6rem);
`;

const HeadItem = styled.li`
    font-size: 1.8rem;
    line-height: 1.27;
`;

const RatesBody = styled.ul`
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
    margin-bottom: 1.9rem;
    min-height: (100%-6rem);
    position: relative;

    @media (max-width: 1279px) {
        margin: 1.6rem 0;
    }
`;

const BodyItem = styled.li`
    padding: 0 3rem;
    font-size: 1.6rem;
    line-height: 1.25;

    &:nth-child(2) {
        padding-left: 4rem;
    }

    @media (max-width: 767px) {
        padding: 0 2rem;
    }
`;

export { Rates, RatesHead, HeadItem, RatesBody, BodyItem, RatesContent };
