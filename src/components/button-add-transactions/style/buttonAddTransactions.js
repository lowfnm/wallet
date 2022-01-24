import styled from "styled-components";
import {BiMinus, BiPlus} from "react-icons/bi";


;
// box-shadow:${(props)=>props.minus?'0px 6px 15px rgba(255, 101, 150, 0.5)':'0px 6px 15px rgba(36, 204, 167, 0.5'} );
// color: white;
// border: none;
// border-radius: 100%;
// position: ${(props)=>props.checkbox?'relative':'absolute'});



export const ButtonAdd = styled.button`
  width: 44px;
  height: 44px;
  background: #24CCA7;
  box-shadow: 0px 6px 15px rgba(36, 204, 167, 0.5);
  color: white;
  border: none;
  border-radius: 100%;
  position: absolute;
  bottom: 40px;
  right: 35px;
  &.buttonExpenses{
    top: 0;
    left: 0;
    background: #FF6596;
    box-shadow: 0px 6px 15px rgba(255, 101, 150, 0.5);
  }
`
export const Plus=styled(BiPlus)`
  cursor: pointer;
  position: absolute;
  transform: translate(-50%,-50%);
  top: 50%;
  left: 50%;
  width: 30px;
  height: 30px;
`;
export const Minus=styled(BiMinus)`
  cursor: pointer;
  position: absolute;
  transform: translate(-50%,-50%);
  top: 50%;
  left: 50%;
  width: 30px;
  height: 30px;
`