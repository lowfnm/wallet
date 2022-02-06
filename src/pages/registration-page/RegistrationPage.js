import RegistrationForm from "../../components/registration-form/RegistrationForm";
import RegistrationHero from "../../components/registration-hero/RegistrationHero";
import { PageContainer } from "./style/registrationpage";

const RegistrationPage = () => {
    return (
        <PageContainer>
            <RegistrationHero />
            <RegistrationForm />
        </PageContainer>
    );
};

export default RegistrationPage;
