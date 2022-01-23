import React from "react";
import LoginForm from "../../components/loginform/LoginForm";
import LoginHero from "../../components/loginhero/LoginHero";
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
