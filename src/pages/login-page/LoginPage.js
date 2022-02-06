import LoginForm from "../../components/login-form/LoginForm";
import LoginHero from "../../components/login-hero/LoginHero";
import { PageContainer } from "./style/loginpage";

const LoginPage = () => {
    return (
        <PageContainer>
            <LoginHero />
            <LoginForm />
        </PageContainer>
    );
};

export default LoginPage;
