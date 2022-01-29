import GlobalStyles from "./style/global";
import { ThemeProvider } from "styled-components";
import theme from "./style/theme";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../../pages/login-page/LoginPage";
import RegistrationPage from "../../pages/registration-page/RegistrationPage";
import DashBoardPage, {
    Diagram,
    Home,
} from "../../pages/dashboard-page/DashBoardPage";

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Routes>
                <Route path="/" element={<DashBoardPage />}>
                    <Route path="home" element={<Home />} />
                    <Route path="diagram" element={<Diagram />} />
                </Route>

                <Route path="*" element={<LoginPage />} />
                <Route path="/login">
                    <Route index element={<LoginPage />} />
                </Route>

                <Route path="/register">
                    <Route index element={<RegistrationPage />} />
                </Route>
            </Routes>
        </ThemeProvider>
    );
};

export default App;
