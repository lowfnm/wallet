import GlobalStyles from "./style/global";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../../pages/loginpage/LoginPage";
import RegistrationPage from "../../pages/registrationpage/RegistrationPage";

const App = () => {
    return (
        <>
            <GlobalStyles />

            <Routes>
                <Route path="/login">
                    <Route index element={<LoginPage />} />
                </Route>

                <Route path="/register">
                    <Route index element={<RegistrationPage />} />
                </Route>

                <Route path="*" element={<LoginPage />} />
            </Routes>
        </>
    );
};

export default App;
