import styled from "styled-components";

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

const ExitLink = styled.button``;

export { NavigationWrapper, NameStatus, ExitLink };
