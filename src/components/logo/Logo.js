import { LogoWrapper, LogoTitle } from "./style/logo";
import SvgLogo from "../icon/SvgLogo";

const Logo = () => {
    return (
        <LogoWrapper>
            <SvgLogo />
            <LogoTitle>Wallet</LogoTitle>
        </LogoWrapper>
    );
};

export default Logo;
