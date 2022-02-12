import styled from "styled-components";

const LinkWrapper = styled.a`
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    @media (max-width: 767px) {
        span {
            display: none;
        }
    }
`;

const ExitLink = styled.span``;

export { LinkWrapper, ExitLink };
