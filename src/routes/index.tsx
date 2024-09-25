import React from "react";
import {Route, Routes} from "react-router-dom";
// import PublicRoute from "./PublicRoute";
import AuthRoute from "./AuthRoute";

//authentication
import SignIn from "pages/auth/SignIn";

// HomePage
import Landingpage from "pages/homePage/landingpage";
// Waitlist
import Waitlist from "pages/waitlist/waitlist";

//404 page
import NotFound from "pages/notFound";
import ApartmentCard from "components/cards/ApartmentCard";


const Router = () => {

    return (
      <Routes>
        {/* user frontend tests */}
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
              <Waitlist />
            </AuthRoute>
            // <AuthRoute>
            // 	<SignIn />
            // </AuthRoute>
          }
        />
{/* This page is just to display the card for the apartments  */}
        <Route
          path="/apartments"
          element={
            <AuthRoute>
              <ApartmentCard />
            </AuthRoute>
            
          }
        />

{/* ######################################################## */}


        <Route
          path="/homepage"
          element={
            <AuthRoute>
              <Landingpage />
            </AuthRoute>
          }
        />

        <Route
          path="/waitlist"
          element={
            <AuthRoute>
              <Waitlist />
            </AuthRoute>
          }
        />

        {/* not found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
};

export default Router;
