import GlobalStyles from "./style/global";
import { ThemeProvider } from "styled-components";
import theme from "./style/theme";
import { Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "../../pages/login-page/LoginPage";
import RegistrationPage from "../../pages/registration-page/RegistrationPage";
import DashBoardPage from "../../pages/dashboard-page/DashBoardPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RequireAuth from "../../helpers/RequireAuth";
import { currentUser } from "../../store/auth/actions/actions";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(currentUser());
    }, [dispatch]);

    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <Routes>
                    <Route path="*" element={<LoginPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegistrationPage />} />

                    <Route path="/home" element={<DashBoardPage />} />

                    <Route
                        path="/login"
                        element={
                            <RequireAuth redirectTo="/home">
                                <DashBoardPage />
                            </RequireAuth>
                        }
                    />

                    <Route
                        path="/register"
                        element={
                            <RequireAuth redirectTo="/home">
                                <DashBoardPage />
                            </RequireAuth>
                        }
                    />

                    {/*<Route*/}
                    {/*    element={*/}
                    {/*        <RequireAuth redirectTo="/login">*/}
                    {/*            <LoginPage />*/}
                    {/*        </RequireAuth>*/}
                    {/*    }*/}
                    {/*/>*/}
                </Routes>
                <ToastContainer autoClose={5000} />
            </ThemeProvider>
        </>
    );
};

export default App;
