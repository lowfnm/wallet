import styled from "styled-components";

const Data = styled.div`
    position: relative;
    max-width: 190px;
    width: 100%;
    input {
        font-size: 1.8rem;
        width: 100%;
        border: none;
        border-bottom: 1px solid #e0e0e0;
        padding: 0.8rem 0 0.8rem 2rem;
        z-index: 3;
        position: relative;
        background-color: transparent;
    }
`;
const IconWrap = styled.div`
    position: absolute;
    bottom: 40px;
    right: 20px;
`;
export { Data, IconWrap };
