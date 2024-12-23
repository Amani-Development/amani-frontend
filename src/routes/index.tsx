
import {Navigate, Route, Routes, useLocation} from "react-router-dom";
// import PublicRoute from "./PublicRoute";
import AuthRoute from "./AuthRoute";

//authentication
import SignIn from "pages/auth/SignIn/SignIn";

// HomePage
import Landingpage from "pages/homePage/landingpage";
// Waitlist
import Waitlist from "pages/waitlist/waitlist";

//404 page
import NotFound from "pages/notFound";
import SignUp from "pages/auth/SignUp/SignUp";

//nav
import Header from "stories/Header/header";
import ResetPassword from "../pages/auth/Reset/ResetPassword";
import UserOnboarding from "../pages/auth/UserOnboarding/UserOnboarding";
import AccountCreated from "../pages/auth/SignUp/AccountCreated";
import ProtectedPasswordReset from "../pages/auth/Reset/ProtectedPasswordReset";
import Dashboard from "pages/Dashboard/Dashboard";
import Layout from "pages/Layout/Layout";
import Settings from "pages/settings/Settings";
import AppNotification from "pages/notification/AppNotification";
import Referral from "pages/referral/Referral";
import Support from "pages/Support/Support";
import Sales from "pages/Sales/Sales"
import Amani from "pages/MyArmani/Amani";
import PropertyForm from "pages/propertyForm/propertyForm";
import Analytics from "pages/Analytics/Analytics";
import UpdateID from "pages/updateId/UpdateID";
import ChangePassword from "pages/ChangePassword/ChangePassword";
import ChangeEmail from "pages/ChangeEmail/ChangeEmail";
import Notification from "pages/Notifications/Notification";
import Currency from "pages/Currency/Currency";
import AllChat from "pages/Chat/AllChat";
import ChatDetail from "pages/Chat/ChatDetail";
import Profile from "pages/Profile/Profile";


const Router = () => {
    const styledRoutes = ['/signin', '/signup',  '/password-reset'];
    const maskNav = ['/waitlist','/app','/app/*'];

    const location = useLocation();
    const isStyledRoute = styledRoutes.includes(location.pathname);

    
const isMaskNav = maskNav.some((path) => location.pathname.startsWith(path));

    return (
      <>
        {!isMaskNav && (
          <Header backGround={isStyledRoute} mask={isMaskNav} Auth={false} />
        )}
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

          {/*User*/}
          <Route
            path="/user-onboarding"
            element={
              <AuthRoute>
                <div>
                  <UserOnboarding />
                </div>
              </AuthRoute>
            }
          />

          {/*User*/}
          <Route
            path="/accountcreated"
            element={
              <AuthRoute>
                <div>
                  <AccountCreated />
                </div>
              </AuthRoute>
            }
          />

          {/*Reset Password*/}
          <Route
            path="/password-reset"
            element={
              <AuthRoute>
                <div>
                  <ResetPassword />
                </div>
              </AuthRoute>
            }
          />

          {/*Reset Password*/}
          <Route
            path="/password-reset-confirm/:uidb64/:token"
            element={
              <AuthRoute>
                <div>
                  <ProtectedPasswordReset />
                </div>
              </AuthRoute>
            }
          />
          <Route
            path="/app"
            element={
              <AuthRoute>
                <Layout />
              </AuthRoute>
            }
          >
            {/* Redirect /app to /app/dashboard */}
            <Route index element={<Navigate to="dashboard" replace />} />

            {/* Child Routes for Layout */}
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="notification" element={<AppNotification />} />
            <Route path="referral-program" element={<Referral />} />
            <Route path="support" element={<Support />} />
            <Route path="mysales" element={<Sales />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="myamani" element={<Amani />} />
            <Route path="uploadamani" element={<PropertyForm />} />
              <Route path="profile" element={<Profile/>} />
            <Route path="settings" element={<Settings />} />
            <Route path="chat" element={<AllChat />} />
            <Route path="chat/:userId" element={<ChatDetail />} />
            <Route path="settings/updateId" element={<UpdateID />} />
            <Route
              path="settings/changePassword"
              element={<ChangePassword />}
            />
            <Route path="settings/changeEmail" element={<ChangeEmail />} />
            <Route
              path="settings/notification-settings"
              element={<Notification />}
            />
            <Route path="settings/currencyndregion" element={<Currency />} />
          </Route>

          {/* home  */}

          <Route
            path="/home"
            element={
              <AuthRoute>
                <div>
                  <Landingpage />
                </div>
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
      </>
    );
};

export default Router;
