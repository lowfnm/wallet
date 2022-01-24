import styled from "styled-components";

export const Data = styled.div`   
    position: relative;
    max-width: 190px;
    svg{
      position: absolute;
      transform: translateY(-50%);
      top: 25%;
      right: 5px;
    }
    input{
      font-family: "Abel", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      width: 100%;
      border: none;
      border-bottom: 1px solid #E0E0E0;
      padding: 10px 0;
      z-index: 3;
      position: relative;
      background-color: transparent;
    }
`