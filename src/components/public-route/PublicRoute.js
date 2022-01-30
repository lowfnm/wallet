import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { userSelector } from "../../store/auth/reducers/reducers";

const PublicRoute = ({ restricted = false }) => {
    const { isAuth } = useSelector(userSelector);
    const shouldRedirect = isAuth && restricted;

    return shouldRedirect ? <Navigate to="/home" /> : <Outlet />;
};

export default PublicRoute;
