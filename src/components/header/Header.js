import { Container, Heading } from "./style/header";
import AccountOptions from "./account-options/AccountOptions";
import Logo from "../common/logo/Logo";

const Header = () => {
    return (
        <Heading>
            <Container>
                <Logo />
                <AccountOptions />
            </Container>
        </Heading>
    );
};

export default Header;
