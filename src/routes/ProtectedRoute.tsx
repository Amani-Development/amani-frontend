import React from "react";
import {Navigate, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";

/**
 * @function ProtectedRoute
 * @description - constructs the applications protected route layout
 * @returns {JSX} - JSX
 */

const ProtectedRoute = ({children}: { children: JSX.Element }): JSX.Element => {
    //   @ts-ignore
    const {tok} = useSelector((store) => store.auth);
    // const { user_data } 
    // const token = localStorage.getItem("token");

    const location = useLocation();

    if (!tok) {
        return <Navigate to={`/signin?redirect=${location.pathname}${location.search ? location.search : ""}`}
                         state={{from: location}} replace/>;
    }

    return children;
};

export default ProtectedRoute;
