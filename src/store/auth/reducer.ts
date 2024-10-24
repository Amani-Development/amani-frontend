import {
    API_ERROR,
    CHANGE_PASSWORD,
    CLEAR_API_ERROR,
    COUNTRY_UPDATE,
    FORGOT_PASSWORD,
    FORGOT_PASSWORD_OTP_VERIFY,
    LOGIN_USER,
    LOGOUT_USER,
    REGISTER_USER,
    RESEND_VERIFICATION,
    VALIDATE_PASSWORD_AND_EMAIL,
    VALIDATE_PHONE_AND_EMAIL,
    VALIDATE_REGISTRATION,
    VERIFY_LOGIN
} from "store/auth/constants";

const initialState = {
    error: "",
    apiError: null,
    loading: false,
    otp_data: {},
    otp_data_new: {},
    user_token: null,
    user_data: null,
    user_country: localStorage.getItem("admin_country") || null
};

const auth = (state = initialState, action: any) => {
    switch (action.type) {
        case LOGIN_USER.REQUEST:
            state = {
                ...state,
                loading: true,
                error: "",
            };
            break;

        case FORGOT_PASSWORD.REQUEST:
            state = {
                ...state,
                loading: true,
                error: "",
            };
            break;

        case FORGOT_PASSWORD.SUCCESS:
            state = {
                ...state,
                loading: false,
                error: "",
            };
            break;

        case FORGOT_PASSWORD.FAILURE:
            state = {
                ...state,
                loading: false,
                error: "error",
            };
            break;

        case FORGOT_PASSWORD_OTP_VERIFY.REQUEST:
            state = {
                ...state,
                loading: true,
                error: "",
            };
            break;

        case FORGOT_PASSWORD_OTP_VERIFY.SUCCESS:
            state = {
                ...state,
                loading: false,
                error: "",
            };
            break;

        case FORGOT_PASSWORD_OTP_VERIFY.FAILURE:
            state = {
                ...state,
                loading: false,
                error: "error",
            };
            break;

        case CHANGE_PASSWORD.SUCCESS:
            state = {
                ...state,
                loading: false,
                error: "",
            };
            break;

        case CHANGE_PASSWORD.FAILURE:
            state = {
                ...state,
                loading: false,
                error: "error",
            };
            break;

        case LOGIN_USER.SUCCESS:
            console.log("login success", action.payload);

            state = {
                ...state,
                user_token: action.payload.jwt_token,
                user_data: action.payload.user,
                loading: false,
                error: "",
            };
            break;

        case REGISTER_USER.REQUEST:
            state = {
                ...state,
                loading: true,
                error: "",
            };
            break;

        case REGISTER_USER.SUCCESS:
            state = {
                ...state,
                otp_data: action.payload,
                loading: false,
                error: "",
            };
            break;

        case VALIDATE_PHONE_AND_EMAIL.REQUEST:
            state = {
                ...state,
                loading: true,
                error: "",
            };
            break;

        case VALIDATE_PHONE_AND_EMAIL.SUCCESS:
            state = {
                ...state,
                loading: false,
                error: "",
            };
            break;

        case VALIDATE_PASSWORD_AND_EMAIL.REQUEST:
            state = {
                ...state,
                loading: true,
                error: "",
            };
            break;

        case VALIDATE_PASSWORD_AND_EMAIL.SUCCESS:
            state = {
                ...state,
                loading: false,
                error: "",
            };
            break;

        case VALIDATE_REGISTRATION.REQUEST:
            state = {
                ...state,
                loading: true,
                error: "",
            };
            break;

        case VALIDATE_REGISTRATION.SUCCESS:
            state = {
                ...state,
                user_token: action.payload.jwt_token,
                user_data: action.payload.user,
                loading: false,
                error: "",
            };
            break;

        case RESEND_VERIFICATION.REQUEST:
            state = {
                ...state,
                loading: true,
                error: "",
            };
            break;

        case RESEND_VERIFICATION.SUCCESS:
            state = {
                ...state,
                otp_data_new: action.payload,
                loading: false,
                error: "",
            };
            break;

        case COUNTRY_UPDATE.REQUEST:
            state = {
                ...state,
                user_country: action.payload
            }
            break;

        case VERIFY_LOGIN:
            state = {
                ...state,
                otp_data: action.payload,
                loading: false,
            };
            break;

        case LOGOUT_USER.REQUEST:
            state = {...state};
            break;

        case LOGOUT_USER.SUCCESS:
            state = {...state};
            break;

        case API_ERROR:
            state = {...state, error: action.payload, loading: false};
            break;

        case CLEAR_API_ERROR:
            state = {...state, error: ""};
            break;

        default:
            state = {...state};
            break;
    }
    return state;
};

export default auth;