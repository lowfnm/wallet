import styled from "styled-components";

const DropDownContainer = styled.div`
    font-size: 1.8rem;
    width: 100%;
    max-width: 410px;
    margin: 3.5rem auto 0rem;
`;

const DropDownHeader = styled.div`
    padding: 1rem 2rem;
    position: relative;
    font-family: inherit;
    border-bottom: 1px solid #e0e0e0;
    color: #bdbdbd;
`;

const ArrowWrap = styled.div`
    cursor: pointer;
    position: absolute;
    bottom: 10px;
    right: 10px;
`;
const DropDownListContainer = styled.div`
    position: relative;
`;

const DropDownList = styled.ul`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background-color: rgba(255, 255, 255, 0, 7);
    padding: 0;
    margin: 0;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(50px);
    border-radius: 20px;
    box-sizing: border-box;
    border: none;
    z-index: 4;
`;

const ListItem = styled.li`
    list-style: none;
    padding: 1rem 1rem 1rem 2rem;
    color: #000000;
    cursor: pointer;

    &:hover {
        color: #ff6596;
        background-color: white;
        opacity: 1;
    }
    &:first-child {
        border-top-left-radius: 17px;
        border-top-right-radius: 17px;
    }
    &:last-child {
        border-bottom-left-radius: 17px;
        border-bottom-right-radius: 17px;
    }
`;
export {
    DropDownContainer,
    DropDownHeader,
    ArrowWrap,
    DropDownListContainer,
    DropDownList,
    ListItem,
};
