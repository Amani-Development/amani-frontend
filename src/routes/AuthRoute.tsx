import { Navigate, useLocation } from "react-router-dom";
// import { useSelector } from "react-redux";

/**
 * @function AuthRoute
 * @description - constructs the applications authentication routes layout
 * @returns {JSX} - JSX
 */

const AuthRoute = ({ children }: { children: JSX.Element }): JSX.Element => {
    // const Auth = useSelector((state: any) => state.auth);

    const location = useLocation();
    // console.log(Auth, 'Auth');

    const tk = localStorage.getItem('AMANITKN') ?? localStorage.getItem('AMANITKN');

    if (!tk) {
        return <Navigate to="/signin" state={{ from: location }} replace />;
    }

    return children;
};

export default AuthRoute;