import styled from "styled-components";

const NavigationWrapper = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.8rem;
    color: #bdbdbd;

    svg:first-of-type {
        margin-right: 1.5rem;
    }
`;

const NameStatus = styled.span`
    margin-right: 1.5rem;
`;

const ExitLink = styled.button``;

export { NavigationWrapper, NameStatus, ExitLink };
