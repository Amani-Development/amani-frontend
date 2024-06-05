import {call, put, takeEvery} from "redux-saga/effects";

//services
import authServices from "api/services/auth";

//redux
import {LOGIN_USER, LOGOUT_USER, RESEND_VERIFICATION, VALIDATE_REGISTRATION} from "./constants";
import {apiError, loginSuccess, resendVerificationSuccess, validateRegistrationSuccess} from "./actions";
import {ResponseGenerator} from "store/type";
// @ts-ignore
const admin_data = JSON.parse(localStorage.getItem("admin_data")) ? JSON.parse(localStorage.getItem("admin_data")) : JSON.parse(localStorage.getItem("admin_data"));
const admin_role = admin_data?.role


function* loginUser({payload}: any) {
    try {
        const {user, redirect} = payload;
        const response: ResponseGenerator = yield call(authServices.login, user);
        if (response.data) {
            yield put(loginSuccess(response.data.data));
            console.log(response.data.data);
            window.location.replace(`${window.location.origin}${redirect}&email=${response.data.data.email}&token=${response.data.data.verify_token}`);
        }
    } catch (error) {
        const message = error["response"]["data"]["message"] || error.message || "network error";

        yield put(apiError(message));
    }
}


function* validateRegistration({payload}: any) {
    try {
        const {data, redirect} = payload;
        const response: ResponseGenerator = yield call(authServices.validateRegistration, data);
        if (response.data) {
            // Comma here //
            // mixpanel.track("Account confirmed", {
            //     email: data.email,
            // });

            yield put(validateRegistrationSuccess(response.data.data));
            console.log(response.data.data.admin);

            localStorage.setItem("token", response.data.data.token);
            const admin_data = JSON.stringify(response.data.data.admin)
            localStorage.setItem("admin_data", admin_data)
            {
                admin_role === 'agent' ? (
                    window.location.replace('/mycustomers')
                ) : (
                    window.location.replace('/new-dashboard')
                )
            }

        }
    } catch (error) {
        const message = error["response"]["data"]["message"] || error.message || "network error";

        yield put(apiError(message));
    }
}

function* resendVerification({payload}: any) {
    try {
        const {data, redirect} = payload;

        const response: ResponseGenerator = yield call(authServices.resendVerification, data);

        if (response.data) {
            yield put(resendVerificationSuccess(response.data.data));

            // toast.success("otp resent, check your e-mail").then(() => {
            //     window.location.replace(`${window.location.origin}${redirect}&email=${response.data.data.email}&token=${response.data.data.verify_token}`);
            // });
        }
    } catch (error) {
        const message = error["response"]["data"]["message"] || error.message || "network error";

        yield put(apiError(message));
    }
}

function* logoutUser() {
    try {
        localStorage.removeItem("token")
    } catch (error) {
        yield put(apiError(error));
    }
    // localStorage.removeItem('token')
}

function* authSaga() {
    yield takeEvery(LOGIN_USER.REQUEST, loginUser);
    yield takeEvery(LOGOUT_USER.REQUEST, logoutUser);
    // yield takeEvery(REGISTER_USER.REQUEST, registerUser);
    // yield takeEvery(FORGOT_PASSWORD.REQUEST, forgotPasswordUser);
    // yield takeEvery(FORGOT_PASSWORD_OTP_VERIFY.REQUEST, VerifyOtpPasswordReset);
    // yield takeEvery(CHANGE_PASSWORD.REQUEST, postNewPassword);

    // yield takeEvery(VALIDATE_PHONE_AND_EMAIL.REQUEST, validatePhoneAndEmail);
    yield takeEvery(VALIDATE_REGISTRATION.REQUEST, validateRegistration);
    yield takeEvery(RESEND_VERIFICATION.REQUEST, resendVerification);
}

export default authSaga;