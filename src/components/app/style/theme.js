import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    components: {
        MuiPaper: {
            styleOverrides: {
                root: {
                    overflowY: "hidden",
                },
            },
        },
        MuiTypography: {
            fontSize: "1.2rem",
            width: "24px",
            height: "24px",
            fontFamily: '"Abel", sans-serif',
        },
        PrivatePickersFadeTransitionGroup: {
            styleOverrides: {
                root: {
                    overflowY: "hidden",
                },
            },
        },
        MuiCalendarPicker: {
            styleOverrides: {
                root: {
                    maxWidth: 300,
                    maxHeight: 350,
                    fontFamily: '"Abel", sans-serif',
                },
            },
        },
        "PrivatePickersSlideTransition-root": {
            styleOverrides: {
                root: {},
            },
        },
        PrivatePickersSlideTransition: {
            styleOverrides: {
                root: {
                    minHeight: 170,
                },
            },
        },
        MuiPickersDay: {
            styleOverrides: {
                root: {
                    fontSize: "1.2rem",
                    width: "24px",
                    height: "24px",
                    fontFamily: '"Abel", sans-serif',
                },
            },
        },
    },
});

export default theme;
