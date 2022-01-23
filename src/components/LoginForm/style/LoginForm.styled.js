import styled, { css } from "styled-components";
import ellipseBlur from "../icon/ellipse-orange.svg";

const FormContainer = styled.div`
    position: relative;
    background: #f1f3f8;
    width: 55%;
    height: 100vh;
    display: flex;

    &::after {
        content: "";
        position: absolute;
        z-index: 1;
        top: 0;
        right: 0;
        width: 618px;
        height: 547px;
        background-image: url(${ellipseBlur});
        background-size: 618px 547px;
        background-repeat: no-repeat;
    }
`;

const FormWrapper = styled.div`
    margin-left: 95px;
    margin-top: auto;
    margin-bottom: auto;

    form {
        position: relative;
        z-index: 2;
        margin: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 540px;
        border-radius: 20px;
        padding-top: 40px;
        padding-bottom: 60px;
        background-color: #fff;
    }
    input {
        width: 410px;
        font-size: 1.8rem;
        font-family: "Abel", sans-serif;
        line-height: 1.27;
        border: none;
        border-bottom: 1px solid #e0e0e0;
        padding: 10px 10px 10px 55px;
    }
`;

const InputLabel = styled.label`
    svg {
        position: absolute;
        transform: translateY(-50%);
        left: 15px;
        top: 50%;
        width: 22px;
        height: 22px;
        fill: #e0e0e0;
    }
`;

const InputWrapper = styled.div`
    margin-bottom: 40px;
    position: relative;

    > div {
        position: absolute;
        left: 50px;
        letter-spacing: 0.1rem;
        margin-top: 2px;
        font-size: 1.5rem;
        font-family: "Abel", sans-serif;
    }
`;

const FormButton = styled.button`
    width: 300px;
    font-size: 1.8rem;
    font-family: "Abel", sans-serif;
    line-height: 1.27;
    letter-spacing: 1px;
    border: 1px solid #4a56e2;
    color: #4a56e2;
    text-transform: uppercase;
    margin-bottom: 20px;
    padding: 13px 10px;
    border-radius: 20px;
    transition: box-shadow 0.2s ease-out;

    :last-child {
        margin-bottom: 0;
    }

    ${(props) =>
        props.primary &&
        css`
            background-color: #24cca7;
            color: #fff;
            border: none;
        `}

    &:hover {
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    }
`;

export { FormContainer, FormWrapper, InputWrapper, FormButton, InputLabel };
