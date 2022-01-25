import GlobalStyles from "./style/global";
import { ThemeProvider } from "styled-components";
import theme from "./style/theme";
import Navigation from "../navigation/Navigation";

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyles />
                <Navigation />
            </>
        </ThemeProvider>
    );
};

export default App;
