import styled from "styled-components";
import { BiPlus } from "react-icons/bi";

const ButtonAdd = styled.button`
    width: 44px;
    height: 44px;
    background: #24cca7;
    box-shadow: 0 6px 15px rgba(36, 204, 167, 0.5);
    color: white;
    border: none;
    border-radius: 100%;
    position: absolute;
    bottom: 40px;
    right: 35px;
`;
const Plus = styled(BiPlus)`
    cursor: pointer;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    width: 30px;
    height: 30px;
`;
export { ButtonAdd, Plus };
