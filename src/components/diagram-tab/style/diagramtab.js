import styled from "styled-components";

const Title = styled.h1`
    font-family: "Poppins", sans-serif;
    font-weight: inherit;
    font-size: 3rem;
    line-height: 1.5;
    @media (max-width: 1279px) {
        display: none;
    }
`;

const DiagramSection = styled.section`
    display: flex;
    justify-content: center;

    @media (max-width: 767px) {
        flex-direction: column;
    }
`;

const TableSection = styled.section`
    margin-top: 2rem;
    margin-left: 3rem;

    @media (max-width: 767px) {
        margin-left: 0;
    }
`;

export { Title, DiagramSection, TableSection };
