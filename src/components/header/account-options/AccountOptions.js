import {
    ExitLink,
    NameStatus,
    NavigationWrapper,
} from "./style/accountOptions";
import SvgLine from "../../icon/SvgLine";
import SvgExitIcon from "../../icon/SvgExitIcon";
import { useDispatch, useSelector } from "react-redux";

import { signOutUser } from "../../../store/auth/actions/actions";
import { Navigate } from "react-router-dom";
import {
    clearState,
    userSelector,
} from "../../../store/auth/reducers/reducers";
import { useEffect } from "react";
import LoginPage from "../../../pages/login-page/LoginPage";

const AccountOptions = () => {
    const dispatch = useDispatch();
    // const navigate = useNavigate();

    const { username, isSuccess } = useSelector(userSelector);

    const logOut = () => {
        dispatch(signOutUser());
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
