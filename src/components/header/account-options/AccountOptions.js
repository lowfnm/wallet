import { useSelector } from "react-redux";
import { userSelector } from "../../../store/auth/reducers/reducers";

import LinkWrapperExit from "./link-wrapper/LinkWrapperExit";
import SvgLine from "../icon/SvgLine";
import { NameStatus, NavigationWrapper } from "./style/accountOptions";

const AccountOptions = () => {
    const { username } = useSelector(userSelector);

    return (
        <NavigationWrapper>
            <NameStatus>{username}</NameStatus>
            <SvgLine />
            <LinkWrapperExit />
        </NavigationWrapper>
    );
};

export default AccountOptions;
