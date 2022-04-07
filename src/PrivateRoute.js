import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext/AuthContext";

const PrivateRoute = () => {
    const { isAuth } = useAuth();
    return isAuth ? <Outlet /> : <Navigate to="/signin" />;
}

export { PrivateRoute }