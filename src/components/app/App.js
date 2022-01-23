import GlobalStyles from "./style/global";
import { ThemeProvider } from "styled-components";
import theme from "./style/theme";

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyles />
            </>
        </ThemeProvider>
    );
};

export default App;
