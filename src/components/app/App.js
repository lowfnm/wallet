import GlobalStyles from "./style/global";
import { ThemeProvider } from "styled-components";
import theme from "./style/theme";
import Currency from "../currency/Currency";

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyles />
                <Currency />
            </>
        </ThemeProvider>
    );
};

export default App;
