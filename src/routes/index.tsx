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
import Search from "components/search/Search";
import ApartmentCard from "components/cards/ApartmentCard";
import SignUp from "pages/auth/SignUp/SignUp";

//nav
import Header from "stories/Header/header";

const Router = () => {
    return (
        <>
            <Header Auth={false} />
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
                    {/*Sign Up*/}
                    <Route
                        path="/signup"
                        element={
                            <AuthRoute>
                                <div>
                                    <SignUp />
                                </div>
                            </AuthRoute>
                        }
                    />
                    {/* home  */}

                    <Route
                        path="/"
                        element={
                            <AuthRoute>
                                <div>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <h1>Development in progress...</h1></div>
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
                        path="/search"
                        element={
                            <AuthRoute>
                                <Search />
                            </AuthRoute>
                            // <AuthRoute>
                            // 	<SignIn />
                            // </AuthRoute>
                        }
                    />
            <Route
                path="/homepage"
                element={
                    <AuthRoute>
                        <Landingpage/>
                    </AuthRoute>
                }
            />

            <Route
                path="/waitlist"
                element={
                    <AuthRoute>
                        <Waitlist/>
                    </AuthRoute>
                }
            />


            {/* not found */}
            <Route path="*" element={<NotFound/>}/>
        </Routes>
            </>
    );
};

export default Router;
