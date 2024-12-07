import {
    API_ERROR,
    CLEAR_API_ERROR, CONFIRMRESET_PASSWORD,
    LOGIN_USER,
    REGISTER_USER, RESET_PASSWORD,

} from "store/auth/constants";

// import {IUserSignin, IUserSignUp, IValidateEmailAndPassword, IValidatePhoneAndEmail} from "store/auth/types";


export const loginUser = (data: any, callback: any) => {
    return {
        type: LOGIN_USER.REQUEST,
        payload: {data, callback},
    };
};

export const loginSuccess = (response: any) => {
    return {
        type: LOGIN_USER.SUCCESS,
        payload: response,
    };
};

export const loginFailure = (error: any) => {
    return {
        type: LOGIN_USER.FAILURE,
        payload: error,
    };
};


export const registerUser = (data: any, callback: any) => ({
    type: REGISTER_USER.REQUEST,
    payload: { data, callback },
});

export const registerUserSuccess = (response: any) => ({
    type: REGISTER_USER.SUCCESS,
    payload: response,
});

export const registerUserFailure = (error: any) => ({
    type: REGISTER_USER.FAILURE,
    payload: error,
});

export const resetUserPassword = (data: any, callback: any) => ({
    type: RESET_PASSWORD.REQUEST,
    payload: { data, callback },
});


export const resetUserPasswordSuccess = (response: any) => ({
    type: RESET_PASSWORD.SUCCESS,
    payload: response,
});

export const resetUserPasswordFailure = (error: any) => ({
    type: RESET_PASSWORD.FAILURE,
    payload: error,
});

export const confirmResetUserPassword = (data: any, callback: any) => ({
    type: CONFIRMRESET_PASSWORD.REQUEST,
    payload: { data, callback },
});


export const confirmResetUserPasswordSuccess = (response: any) => ({
    type: CONFIRMRESET_PASSWORD.SUCCESS,
    payload: response,
});

export const confirmResetUserPasswordFailure = (error: any) => ({
    type: CONFIRMRESET_PASSWORD.FAILURE,
    payload: error,
});



export const apiError = (error: any) => {
    return {
        type: API_ERROR,
        payload: error,
    };
};

export const clearErrors = (error: any) => {
    return {
        type: CLEAR_API_ERROR,
        payload: error,
    };
};