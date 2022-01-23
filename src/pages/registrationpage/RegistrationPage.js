import React from "react";
import RegistrationForm from "../../components/registrationform/RegistrationForm";
import styled from "styled-components";

const PageContainer = styled.div`
    display: flex;
`;

const RegistrationPage = () => {
    return (
        <div>
            <PageContainer>
                <RegistrationForm />
            </PageContainer>
        </div>
    );
};

export default RegistrationPage;
