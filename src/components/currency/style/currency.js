import styled from "styled-components";
import CircularProgress from "@mui/material/CircularProgress";

const Rates = styled.article`
    margin-top: 3rem;
    max-width: 348px;
    position: relative;
    height: 347px;
    font-style: normal;
    font-weight: 400;
    color: white;
    background-color: #4a56e2;
    border-radius: 30px;
    border: 1px solid #000;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;

const RatesHead = styled.ul`
    display: flex;
    justify-content: space-between;
    padding: 1.7rem 0 2rem;
    border-radius: 30px 30px 0 0;
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

    &:nth-child(2) {
        margin-left: 10px;
    }
`;

const Loader = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export { Rates, RatesHead, HeadItem, RatesBody, BodyItem, Loader };
