import { useSelector } from "react-redux";
import { userSelector } from "../../store/auth/reducers/reducers";
import {
    Heading,
    Container,
    NavigationWrapper,
    NameStatus,
} from "./style/header";
import Logo from "../common/logo/Logo";
import LogOut from "./log-out/LogOut";

const Header = () => {
    const { username } = useSelector(userSelector);

    return (
        <Heading>
            <Container>
                <Logo />
                <NavigationWrapper>
                    <NameStatus>{username}</NameStatus>
                    <LogOut />
                </NavigationWrapper>
            </Container>
        </Heading>
    );
};

export default Header;
