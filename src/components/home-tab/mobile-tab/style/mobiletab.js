import styled from "styled-components";

const OperationList = styled.ul``;

const OperationItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #dcdcdf;
    padding: 1.2rem 0;

    &:last-child {
        border-bottom: 0;
    }
`;

const OperationTypeLine = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 7px;
    height: 100%;
`;
const BalanceWrap = styled.div`
    @media (max-width: 767px) {
        margin: -3rem auto 3rem;
        & > section {
            display: block;
        }
    }
`;

export { OperationList, OperationItem, OperationTypeLine, BalanceWrap };
