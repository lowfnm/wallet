import styled from "styled-components";

const Heading = styled.header`
    max-width: 100%;
    margin: 0 auto;
    padding: 2rem 0;
    height: 9rem;

    @media (max-width: 767px) {
        height: 6rem;
        padding: 1rem 0;
    }
`;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
`;

export { Heading, Container };
