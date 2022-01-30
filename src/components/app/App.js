import GlobalStyles from "./style/global";
import { ThemeProvider } from "styled-components";
import theme from "./style/theme";
import { Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "../../pages/login-page/LoginPage";
import RegistrationPage from "../../pages/registration-page/RegistrationPage";
import DashBoardPage from "../../pages/dashboard-page/DashBoardPage";
import HomeTab from "../home-tab/HomeTab";
import DiagramTab from "../diagram-tab/DiagramTab";

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Routes>
                <Route path="/" element={<DashBoardPage />}>
                    <Route index element={<Navigate to="/home" />} />
                    <Route path="home" element={<HomeTab />} />
                    <Route path="diagram" element={<DiagramTab />} />
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
