import { NameStatus, NavigationWrapper } from "./style/accountOptions";
import SvgLine from "../../icon/SvgLine";
import LinkWrapperExit from "./link-wrapper/LinkWrapperExit";

const AccountOptions = () => {
    return (
        <NavigationWrapper>
            <NameStatus>Name</NameStatus>
            <SvgLine />
            <LinkWrapperExit />
        </NavigationWrapper>
    );
};

export default AccountOptions;
