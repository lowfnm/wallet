import styled from "styled-components";
import Switch from "@mui/material/Switch";

const ModalWrap = styled.div`
    width: 540px;
    height: 540px;
    padding: 4rem 6.5rem 6rem;
    box-sizing: border-box;
    border-radius: 20px;
    position: relative;
    background: white;
    z-index: 2;
`;
const Background = styled.div`
    background: rgba(0, 0, 0, 0.25);
    width: 100%;
    height: 100%;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
`;
const ModalContent = styled.form`
    h1 {
        font-family: "Poppins", sans-serif;
        font-weight: 400;
        font-size: 3rem;
        line-height: 1.5;
        text-align: center;
    }
`;
const ModalClose = styled.div`
    cursor: pointer;
    position: absolute;
    width: 16px;
    height: 16px;
    top: 20px;
    right: 20px;
`;
const Flex = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Input = styled.input`
    font-family: "Abel", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 1.8rem;
    max-width: ${(props) => (props.big ? "410px" : "190px")};
    width: 100%;
    border: none;
    margin-bottom: 3.5rem;
    box-sizing: border-box;
    border-bottom: 1px solid #e0e0e0;
    padding: 0.8rem 0;
    padding-left: ${(props) => (props.big ? "2rem" : 0)};
    position: relative;
    background-color: transparent;
    z-index: 3;
    &:focus-visible {
        //outline: none;
    }
    &::placeholder {
        color: #bdbdbd;
        text-align: ${(props) => (props.big ? "left" : "center")};
    }
    &:focus-visible {
        border: none;
    }
`;

const ModalButton = styled.button`
    font-size: 1.8rem;
    display: block;
    width: 300px;
    height: 50px;
    background: ${(props) => (props.cancel ? "#fff" : "#24CCA7")};
    border: ${(props) => (props.cancel ? `1px solid #4A56E2` : "none")};
    color: ${(props) => (props.cancel ? "#4A56E2" : "#fff")};
    border-radius: 20px;
    margin: ${(props) => (props.cancel ? "2rem" : "0")} auto 0;
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
    "& .MuiTypography-root": {
        fontWeight: 400,
        fontSize: "1.6rem",
        fontFamily: '"Abel", sans-serif',
    },
    "& .MuiSwitch-switchBase": {
        margin: -2,
        padding: 0,
        transform: "translateX(-4px)",
        "&.Mui-checked": {
            "& > .MuiSwitch-thumb": {
                backgroundColor: "#FF6596",
            },
            transform: "translateX(44px)",
            "& .MuiSwitch-thumb:before": {
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                    "#fff"
                )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
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
        "&:before": {
            content: '""',
            position: "absolute",
            width: "100%",
            height: "100%",
            left: 0,
            top: 0,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                "#fff"
            )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
        },
    },
    "& .MuiSwitch-track": {
        opacity: 0,
    },
}));

export {
    ModalWrap,
    Background,
    ModalContent,
    ModalClose,
    Flex,
    Input,
    ModalButton,
    Switcher,
};
