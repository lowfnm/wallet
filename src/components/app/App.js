import GlobalStyles from "./style/global";
import { ThemeProvider } from "styled-components";
import theme from "./style/theme";
import Balance from "../balance/Balance";

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyles />
                <Balance />
            </>
        </ThemeProvider>
    );
};

export default App;
