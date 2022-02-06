import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { userSelector } from "../../store/auth/reducers/reducers";

const PrivateRoute = () => {
    const { isAuth } = useSelector(userSelector);
    return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
