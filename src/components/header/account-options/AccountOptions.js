import {
    ExitLink,
    NameStatus,
    NavigationWrapper,
} from "./style/accountOptions";
import SvgLine from "../../icon/SvgLine";
import SvgExitIcon from "../../icon/SvgExitIcon";
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../../../store/auth/reducers/reducers";
import { signOutUser } from "../../../store/auth/actions/actions";

import { useNavigate } from "react-router-dom";

const AccountOptions = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { username, isSuccess } = useSelector(userSelector);

    const logOut = () => {
        dispatch(signOutUser());
        return navigate("/login");
    };

    return (
        <NavigationWrapper>
            <NameStatus>{username}</NameStatus>
            <SvgLine />
            <SvgExitIcon />
            <ExitLink onClick={logOut}>Exit</ExitLink>
        </NavigationWrapper>
    );
};

export default AccountOptions;
