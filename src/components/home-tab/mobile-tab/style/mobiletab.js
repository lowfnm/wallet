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
    background-color: #ff6596;
`;

export { OperationList, OperationItem, OperationTypeLine };
