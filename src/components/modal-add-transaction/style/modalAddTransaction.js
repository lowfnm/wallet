import styled from "styled-components";
import Switch from "@mui/material/Switch";
import plus from "../icon/plus.svg";
import minus from "../icon/minus.svg";

const Background = styled.div`
    background: rgba(0, 0, 0, 0.25);
    width: 100%;
    height: 100%;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    top: 0;
    left: 0;
    @media screen and (max-width: 767px) {
        height: 100%;
        background: rgba(255, 255, 255, 1);
        overflow-y: hidden;
    }
`;
const ModalWrap = styled.div`
    width: 540px;
    padding: 4rem 6.5rem 6rem;
    box-sizing: border-box;
    border-radius: 20px;
    position: relative;
    background: white;
    z-index: 3;
    @media screen and (max-width: 767px) {
        width: 100vw;
        height: 100vh;
        overflow-y: hidden;
        border-radius: 0;
        text-align: center;
        padding: 4rem 2rem 4rem;
        position: relative;
        top: 50px;
        left: 0;
    }
`;
const ModalTitle = styled.h2`
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 3rem;
    line-height: 1.5;
    text-align: center;
    @media screen and (max-width: 767px) {
        font-size: 2.4rem;
    }
`;
const ModalClose = styled.div`
    cursor: pointer;
    position: absolute;
    width: 16px;
    height: 16px;
    top: 20px;
    right: 20px;

    @media screen and (max-width: 767px) {
        display: none;
    }
`;
const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 767px) {
        flex-direction: column;
    }
`;
const InputWrap = styled.div`
    position: relative;
    max-width: 410px;
    width: 100%;
    margin: 0 auto;
    input {
        font-family: inherit;
        font-size: 1.8rem;
        max-width: 190px;
        width: 100%;
        border: none;
        margin-top: 3.5rem;
        box-sizing: border-box;
        border-bottom: 1px solid #e0e0e0;
        padding: 0.8rem 2rem;
        position: relative;
        background-color: transparent;
        z-index: 3;
        text-align: left;
        &::placeholder {
            color: #bdbdbd;
        }
        @media screen and (max-width: 767px) {
            max-width: 410px;
            text-align: left !important;
        }
    }
    span {
        position: absolute;
        bottom: -20px;
        left: 0;
    }
    & .css-2iy3mj {
        display: none;
    }
    & .MuiFormControl-root {
        max-width: 410px;
        width: 100%;
    }
    & .MuiInputAdornment-root {
        margin-left: 0;
    }

    & .MuiOutlinedInput-notchedOutline {
        border: none;
    }
    & .MuiInputLabel-root,
    & .MuiButtonBase-root {
        display: none;
    }

    .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input {
        font-family: "Abel", sans-serif;
        font-size: 1.8rem;
        height: auto;
        cursor: pointer;
    }

    .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root {
        padding-right: 0;
    }
`;
const SwitcherLabelWrap = styled.div`
    top: 50%;
    left: 50%;
    position: absolute;
`;
const SwitcherLabel = styled.span`
    position: absolute;
    font-size: 1.6rem;
    font-family: inherit;
    top: 50%;
    left: -110px;
    transform: translateY(-50%);
    &:first-child {
        left: 60px;
    }
`;
const ModalButton = styled.button`
    font-size: 1.8rem;
    font-family: inherit;
    display: block;
    max-width: 300px;
    width: 100%;
    height: 50px;
    letter-spacing: 0.1rem;
    background: ${(props) => (props.cancel ? "#fff" : `#24CCA7`)};
    border: ${(props) => (props.cancel ? `1px solid #4A56E2` : "none")};
    color: ${(props) => (props.cancel ? "#4A56E2" : "#fff")};
    border-radius: 20px;
    margin: ${(props) => (props.cancel ? "2rem" : "5rem")} auto 0;
    &:hover {
        box-shadow: ${(props) =>
            props.cancel
                ? `0px 0px 15px rgba(74, 86, 226, 0.5)`
                : `0px 0px 20px rgba(36, 204, 167, 0.7)`};
    }
`;
const IconCalendarWrap = styled.div`
    position: absolute;
    bottom: 4px;
    right: 20px;
`;
const SwitcherWrap = styled.div`
    display: flex;
    justify-content: center;
    margin: 3.5rem auto 0;
    position: relative;
    label {
        position: relative;
        margin: 0;
    }
`;
const Switcher = styled(Switch)(() => ({
    border: `1px solid #E0E0E0`,
    boxSizing: `border-box`,
    borderRadius: 30,
    "&.MuiSwitch-root": {
        width: 80,
        height: 40,
        overflow: "visible",
    },
    "& .MuiSwitch-switchBase": {
        margin: -2,
        padding: 0,
        transform: "translateX(-4px)",
        "&.Mui-checked": {
            transform: "translateX(44px)",
            "& > .MuiSwitch-thumb": {
                backgroundColor: "#FF6596",
            },
            "& .MuiSwitch-thumb:before": {
                content: '""',
                position: "absolute",
                width: 20,
                height: 20,
                left: "50%",
                top: "50%",
                transform: "translate(-50%,-50%)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundImage: `url(${minus})`,
            },
            "& + .MuiSwitch-track": {
                opacity: 0,
            },
        },
    },
    "& .MuiSwitch-thumb": {
        backgroundColor: "#24CCA7",
        width: 44,
        height: 44,
        position: "relative",
        "&:before": {
            content: '""',
            position: "absolute",
            width: 20,
            height: 20,
            left: "50%",
            top: "50%",
            transform: "translate(-50%,-50%)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundImage: `url(${plus})`,
        },
    },
    "& .MuiSwitch-track": {
        opacity: 0,
    },
    "&.MuiFormControlLabel-label": {
        color: "#FF6596",
    },
}));

const CategoryDropWrap = styled.div`
    margin-top: 3.5rem;
    max-width: 410px;
    width: 100%;
    position: relative;
    @media screen and (max-width: 767px) {
        margin: 3.5rem auto 0;
    }
`;

const ArrowWrap = styled.div`
    cursor: pointer;
    position: absolute;
    bottom: 14px;
    right: 7px;
`;
export {
    ModalWrap,
    Background,
    ModalTitle,
    ModalClose,
    Flex,
    InputWrap,
    ModalButton,
    Switcher,
    SwitcherWrap,
    SwitcherLabel,
    IconCalendarWrap,
    SwitcherLabelWrap,
    CategoryDropWrap,
    ArrowWrap,
};
