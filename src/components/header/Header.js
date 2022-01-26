import { Container, Heading } from "./style/header";
import AccountOptions from "./account-options/AccountOptions";
import Logo from "../logo/Logo";

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
