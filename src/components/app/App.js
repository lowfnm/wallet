import GlobalStyles from "./style/global";
import { ThemeProvider } from "styled-components";
import theme from "./style/theme";
import Header from "../header/Header";

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyles />
                <Header />
            </>
        </ThemeProvider>
    );
};

export default App;
