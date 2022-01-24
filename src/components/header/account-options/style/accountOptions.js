import styled from "styled-components";

const NavigationWrapper = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.8rem;
    color: #bdbdbd;
    svg:first-of-type {
        margin: 0 1.5rem;
    }
`;

const NameStatus = styled.span``;

const ExitLink = styled.a`
    margin-left: 1rem;
`;

export { NavigationWrapper, NameStatus, ExitLink };
