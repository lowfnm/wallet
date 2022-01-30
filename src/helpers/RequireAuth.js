import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { userSelector } from "../store/auth/reducers/reducers";

export default function RequireAuth({ children, redirectTo }) {
    const { isAuth } = useSelector(userSelector);
    console.log(isAuth);
    if (isAuth) {
        return children;
    }
    console.log(isAuth);

    return <Navigate to={redirectTo} />;
}
