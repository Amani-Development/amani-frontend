import { call, put, takeEvery, CallEffect, PutEffect } from 'redux-saga/effects';


//services
import authServices from "api/services/auth";

//redux
import {CONFIRMRESET_PASSWORD, LOGIN_USER, REGISTER_USER, RESET_PASSWORD} from "./constants";

import {
    apiError, confirmResetUserPasswordFailure, confirmResetUserPasswordSuccess, loginFailure,
    loginSuccess,
    registerUserFailure, registerUserSuccess, resetUserPasswordFailure, resetUserPasswordSuccess,
} from "./actions";

import {errorHandler} from "../../helpers/errorHandler";



function* loginUser(action: any): Generator<CallEffect | PutEffect, void, any> {
    try {
        const response = yield call(authServices.login, action.payload.data);
        yield put(loginSuccess(response.data));
        if (action.payload.callback) {
            action.payload.callback(null, response.data);
        }
    } catch (error) {
        yield put(loginFailure(error));
        if (action.payload.callback) {
            action.payload.callback(error, null);
            const message = errorHandler(error);
            yield put(apiError(message));
        }
    }

}

function* registerUser(action: any): Generator<CallEffect | PutEffect, void, any> {
    try {
        const response = yield call(authServices.register, action.payload.data);
        yield put(registerUserSuccess(response.data));
        if (action.payload.callback) {
            action.payload.callback(null, response.data);
        }
    } catch (error) {
        yield put(registerUserFailure(error));
        if (action.payload.callback) {
            action.payload.callback(error, null);
            const message = errorHandler(error);
            yield put(apiError(message));
        }
    }
}

function* resetPassword(action: any): Generator<CallEffect | PutEffect, void, any> {
    try {
        const response = yield call(authServices.resetpassword, action.payload.data);
        yield put(resetUserPasswordSuccess(response.data));
        if (action.payload.callback) {
            action.payload.callback(null, response.data);
        }
    } catch (error) {
        yield put(resetUserPasswordFailure(error));
        if (action.payload.callback) {
            action.payload.callback(error, null);
            const message = errorHandler(error);
            yield put(apiError(message));
        }
    }
}

function* confirmResetPassword(action: any): Generator<CallEffect | PutEffect, void, any> {
    try {
        const response = yield call(authServices.confirmresetpassword, action.payload.data);
        yield put(confirmResetUserPasswordSuccess(response.data));
        if (action.payload.callback) {
            action.payload.callback(null, response.data);
        }
    } catch (error) {
        yield put(confirmResetUserPasswordFailure(error));
        if (action.payload.callback) {
            action.payload.callback(error, null);
            const message = errorHandler(error);
            yield put(apiError(message));
        }
    }
}
function* authSaga() {
    yield takeEvery(LOGIN_USER.REQUEST, loginUser);
    yield takeEvery(REGISTER_USER.REQUEST, registerUser);
    yield takeEvery(RESET_PASSWORD.REQUEST, resetPassword);
    yield takeEvery(CONFIRMRESET_PASSWORD.REQUEST, confirmResetPassword);
}

export default authSaga;