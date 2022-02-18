import GlobalStyles from "../../theme/global";
import { ThemeProvider } from "@mui/material";
import theme from "../../theme/theme";
import { Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "../../pages/login-page/LoginPage";
import RegistrationPage from "../../pages/registration-page/RegistrationPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { currentUser } from "../../store/auth/actions/actions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import PublicRoute from "../../routes/public-route/PublicRoute";
import PrivateRoute from "../../routes/private-route/PrivateRoute";
import DashBoardPage from "../../pages/dashboard-page/DashBoardPage";
import HomeTab from "../home-tab/HomeTab";
import DiagramTab from "../diagram-tab/DiagramTab";
import Currency from "../currency/Currency";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(currentUser());
    }, [dispatch]);

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />

            <Routes>
                <Route path="/" element={<PrivateRoute />}>
                    <Route element={<DashBoardPage />}>
                        <Route index element={<Navigate to="/home" />} />
                        <Route path="home" element={<HomeTab />} />
                        <Route path="diagram" element={<DiagramTab />} />
                        <Route path="currency" element={<Currency />} />
                    </Route>
                </Route>

                <Route path="login" element={<PublicRoute restricted />}>
                    <Route index element={<LoginPage />} />
                </Route>
                <Route path="register" element={<PublicRoute restricted />}>
                    <Route index element={<RegistrationPage />} />
                </Route>
                <Route path="*" element={<LoginPage />} />
            </Routes>
            <ToastContainer autoClose={5000} />
        </ThemeProvider>
    );
};

export default App;
