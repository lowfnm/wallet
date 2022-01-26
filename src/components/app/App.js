import GlobalStyles from "./style/global";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../../pages/login-page/LoginPage";
import RegistrationPage from "../../pages/registration-page/RegistrationPage";
import DashBoardPage from "../../pages/dashboard-page/DashBoardPage";

const App = () => {
    return (
        <>
            <GlobalStyles />

            <Routes>
                <Route path="*" element={<LoginPage />} />
                <Route path="/login">
                    <Route index element={<LoginPage />} />
                </Route>

                <Route path="/register">
                    <Route index element={<RegistrationPage />} />
                </Route>

                <Route path="/home">
                    <Route index element={<DashBoardPage />} />
                </Route>
            </Routes>
        </>
    );
};

export default App;
