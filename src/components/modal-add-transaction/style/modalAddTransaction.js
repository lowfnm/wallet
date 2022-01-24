import styled from "styled-components";
import { MdClose } from "react-icons/md";

export const ModalWrap = styled.div`
  width: 540px;
  height: 540px;
  padding: 40px 65px 60px;
  box-sizing: border-box;
  border-radius: 20px;
  position: relative;
  background: white;
  z-index: 2;
  
`
export const Background=styled.div`
  background: rgba(0, 0, 0, 0.25); 
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0; 
`
export const ModalContent=styled.form`
    h1{
      font-family: "Poppins", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 30px;
      line-height: 1.5;
      text-align: center;
    }
  input{
    
  }
`
export const CloseModal=styled(MdClose)`
  cursor: pointer;
  position: absolute;
  width: 16px;
  height: 16px;
  top: 20px;
  right: 20px;
`
export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Input =  styled.input`
    font-family: "Abel", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    max-width: ${(props)=>props.big?'410px':'190px'};
    width: 100%;
    border: none;
    margin-bottom: 35px;
    box-sizing: border-box;
    border-bottom: 1px solid #E0E0E0;
    padding: 10px 0;
    padding-left:${(props)=> props.big?'20px':0};
    position: relative;
    background-color: transparent;
    z-index: 3;
  &:focus-visible{
    //outline: none;
  
  }
  &::placeholder{
    color:#BDBDBD;
    text-align:${(props)=> props.big?'left':'center'};
  }
  &:focus-visible{
    border: none;
  }
`
export const ModalButton= styled.button`
  font-family: "Abel", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  display: block;
  width: 300px;
  height: 50px;
  background:${(props)=>props.cancel?'#fff':'#24CCA7'} ;
  border:${(props)=>props.cancel?`1px solid #4A56E2`:'none'} ;
  color:${(props)=>props.cancel?'#4A56E2':'#fff'};
  border-radius: 20px;
  margin: 0 auto;
  margin-top: ${(props)=>props.cancel?'20px':'0'};
  cursor: pointer ;
`