import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    components: {
        MuiPaper: {
            styleOverrides: {
                root: {},
            },
        },
        MuiTypography: {
            fontSize: "1.2rem",
            width: "24px",
            height: "24px",
            fontFamily: '"Abel", sans-serif',
        },
        MuiCalendarPicker: {
            styleOverrides: {
                root: {
                    height: "280px",
                    fontFamily: '"Abel", sans-serif',

                    "& .css-8v7him": {
                        paddingLeft: "36px",
                        paddingRight: "27px",
                    },

                    "& .MuiCalendarPicker-viewTransitionContainer": {},
                },
            },
        },
        MuiPickersDay: {
            styleOverrides: {
                root: {
                    fontSize: "1.2rem",
                    fontFamily: '"Abel", sans-serif',
                },
            },
        },
    },
});

export default theme;
