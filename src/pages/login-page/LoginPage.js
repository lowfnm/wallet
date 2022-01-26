import LoginForm from "../../components/login-form/LoginForm";
import LoginHero from "../../components/login-hero/LoginHero";
import styled from "styled-components";

const PageContainer = styled.div`
    display: flex;
`;

const LoginPage = () => {
    return (
        <PageContainer>
            <LoginHero />
            <LoginForm />
        </PageContainer>
    );
};

export default LoginPage;
