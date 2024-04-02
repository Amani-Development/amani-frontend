import React from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import { useSelector } from "react-redux";
// import PublicRoute from "./PublicRoute";
import AuthRoute from "./AuthRoute";

//authentication
import SignIn from "pages/auth/SignIn";

//404 page
import NotFound from "pages/notFound";




const Router = () => {

	return (
		<Routes>
			{/* user frontend tests */}
			{/* <Route path="/user-frontend-test" element={<Task1 />} /> */}
			{/* authentication */}
			<Route
				path="/signin"
				element={
					<AuthRoute>
						<SignIn />
					</AuthRoute>
				}
			/>
			{/* home  */}
			<Route
				path="/"
				element={
					<AuthRoute>
						<SignIn />
					</AuthRoute>
				}
			/>





			{/* not found */}
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};

export default Router;
