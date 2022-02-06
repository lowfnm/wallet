import { LogoWrapper, LogoTitle } from "./style/logo";
import SvgLogo from "../../header/icon/SvgLogo";

const Logo = () => {
    return (
        <LogoWrapper>
            <SvgLogo />
            <LogoTitle>Wallet</LogoTitle>
        </LogoWrapper>
    );
};

export default Logo;
