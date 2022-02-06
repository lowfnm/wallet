import styled from "styled-components";

const FormContainer = styled.div`
    position: relative;
    background-color: #f1f3f8;
    width: 55%;
    height: 100vh;
    display: flex;

    @media (max-width: 1279px) {
        width: 100%;
        height: auto;
        background-color: #e7eaf2;
    }
`;

const FormWrapper = styled.div`
    margin-left: 9.5rem;
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
        padding-top: 4rem;
        padding-bottom: 6rem;
        background-color: #fff;

        @media (max-width: 767px) {
            width: 100vw;
            padding: 20px;
            border-radius: 0;
        }
    }
    input {
        width: 410px;
        font-size: 1.8rem;
        font-family: inherit;
        line-height: 1.27;
        border: none;
        border-bottom: 1px solid #e0e0e0;
        padding: 1rem 1rem 1rem 5.5rem;

        @media (max-width: 767px) {
            width: 100%;
        }
    }

    div {
        @media (max-width: 767px) {
            width: 100%;
        }
    }

    a {
        display: block;
        width: 300px;
        text-align: center;
        font-size: 1.8rem;
        line-height: 1.27;
        letter-spacing: 1px;
        border: 1px solid #4a56e2;
        color: #4a56e2;
        text-transform: uppercase;
        padding: 1.3rem 1rem;
        border-radius: 20px;
        transition: box-shadow 0.2s ease-out;

        &:hover {
            box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        }
        @media (max-width: 767px) {
            width: 100%;
        }
    }

    @media (max-width: 1279px) {
        margin: 0 auto;
        padding-top: 5rem;
        padding-bottom: 20rem;
    }

    @media (max-width: 767px) {
        padding: 0;
    }
`;

const LogoWrapper = styled.div`
    margin-bottom: 5rem;
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
    margin-bottom: 4rem;
    position: relative;

    > span {
        position: absolute;
        display: block;
        left: 50px;
        letter-spacing: 0.1rem;
        margin-top: 0.2rem;
        font-size: 1.4rem;
    }
`;

const FormButton = styled.button`
    width: 300px;
    font-size: 1.8rem;
    font-family: inherit;
    line-height: 1.27;
    letter-spacing: 1px;
    background-color: #24cca7;
    color: #fff;
    text-transform: uppercase;
    margin-bottom: 2rem;
    padding: 1.3rem 1rem;
    border-radius: 20px;
    transition: box-shadow 0.2s ease-out;

    &:hover {
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    }
    @media (max-width: 767px) {
        width: 100%;
    }
`;

export {
    FormContainer,
    FormWrapper,
    InputWrapper,
    FormButton,
    LogoWrapper,
    InputLabel,
};
