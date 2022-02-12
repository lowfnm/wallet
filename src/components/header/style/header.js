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

const NavigationWrapper = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.8rem;
    color: #bdbdbd;

    svg:first-of-type {
        margin-right: 1.5rem;

        @media (max-width: 767px) {
            margin-right: 0;
        }
    }
`;

const NameStatus = styled.div`
    position: relative;
    margin-right: 3rem;

    &::after {
        content: "";
        position: absolute;
        height: 30px;
        width: 1px;
        background-color: #bdbdbd;
        right: -17px;
        top: calc(50% - 15px);

        @media (max-width: 767px) {
            content: none;
        }
    }

    @media (max-width: 767px) {
        margin-right: 1rem;
    }
`;

export { Heading, Container, NavigationWrapper, NameStatus };
