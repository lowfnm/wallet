import {
    ExitLink,
    NameStatus,
    NavigationWrapper,
} from "./style/accountOptions";
import SvgLine from "../../icon/SvgLine";
import SvgExitIcon from "../../icon/SvgExitIcon";

const AccountOptions = () => {
    return (
        <NavigationWrapper>
            <NameStatus>Name</NameStatus>
            <SvgLine />
            <SvgExitIcon />
            <ExitLink>Exit</ExitLink>
        </NavigationWrapper>
    );
};

export default AccountOptions;
