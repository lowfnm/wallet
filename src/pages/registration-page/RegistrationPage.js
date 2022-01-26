import RegistrationForm from "../../components/registration-form/RegistrationForm";
import RegistrationHero from "../../components/registration-hero/RegistrationHero";
import styled from "styled-components";

const PageContainer = styled.div`
    display: flex;
`;

const RegistrationPage = () => {
    return (
        <PageContainer>
            <RegistrationHero />
            <RegistrationForm />
        </PageContainer>
    );
};

export default RegistrationPage;
