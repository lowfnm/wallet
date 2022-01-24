import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";

export const DropDownContainer = styled("div")`
  font-family: "Abel", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  width: 100%;
  max-width: 410px;
  margin: 0 auto;
  margin-bottom: 35px;
`;

export const DropDownHeader = styled("div")`
  border-bottom: 1px solid #E0E0E0;
  color: #BDBDBD;
  margin-bottom: 6px;
  padding: 10px 20px;
  position: relative;
`;

export const ArrowDown = styled(IoIosArrowDown)`
  cursor: pointer;
  position: absolute;
  width: 36px;
  height: 18px;
  bottom: 9px;
  right: 0;
`

export const DropDownListContainer = styled("div")`
  position: relative;
`;

export const DropDownList = styled("ul")`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 0,7);
  padding: 0;
  margin: 0;
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(50px);
  border-radius: 20px;
  box-sizing: border-box;
  border:none;
  z-index: 4;
`;

export const ListItem = styled("li")`
  list-style: none;
  padding: 13px 9px 13px 20px;
  color: #000000;
  cursor: pointer;
  
  &:hover{
    color: #FF6596;
    background-color: white;
    opacity: 1;
  }
  &:first-child{
    border-top-left-radius: 17px;
    border-top-right-radius: 17px;
  }
  &:last-child{
    border-bottom-left-radius: 17px;
    border-bottom-right-radius: 17px;
  }
`;
