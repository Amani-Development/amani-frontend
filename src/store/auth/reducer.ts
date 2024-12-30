import {
    API_ERROR,
    CLEAR_API_ERROR, CONFIRMRESET_PASSWORD,
    LOGIN_USER,
    REGISTER_USER, RESENDACTIVATION_USER, RESET_PASSWORD,
} from "store/auth/constants";

const initialState = {
    error: "",
    apiError: null,
    loading: false,
    user_data: null,
    tok: null,
    Auth: false,
    Reset_token: null,
    uidb64: null,
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

        case LOGIN_USER.SUCCESS:
            state = {
                ...state,
                tok: action.payload.token,
                Auth: true,
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
                user_data: action.payload,
                loading: false,
                error: "",
            };
            break;

        case REGISTER_USER.FAILURE:
            state = {
                ...state,
                loading: false,
                error: '',
            };
            break;
        case RESET_PASSWORD.REQUEST:
            state = {
                ...state,
                loading: true,
                error: "",
            };
            break;

        case RESET_PASSWORD.SUCCESS:
            state = {
                ...state,
                user_data: action.payload,
                loading: false,
                error: "",
            };
            break;

        case RESET_PASSWORD.FAILURE:
            state = {
                ...state,
                loading: false,
                error: '',
            };
            break;
        case CONFIRMRESET_PASSWORD.REQUEST:
            state = {
                ...state,
                loading: true,
                error: "",
            };
            break;

        case CONFIRMRESET_PASSWORD.SUCCESS:
            state = {
                ...state,
               user_data: action.payload,
                loading: false,
                error: "",
            };
            break;

        case CONFIRMRESET_PASSWORD.FAILURE:
            state = {
                ...state,
                loading: false,
                error: '',
            };
            break;
        case RESENDACTIVATION_USER.REQUEST:
            state = {
                ...state,
                loading: true,
                error: "",
            };
            break;

        case RESENDACTIVATION_USER.SUCCESS:
            state = {
                ...state,
                uidb64: action.payload.uidb64,
                Reset_token: action.payload.token,
                loading: false,
                error: "",
            };
            break;

        case RESENDACTIVATION_USER.FAILURE:
            state = {
                ...state,
                loading: false,
                error: '',
            };
            break;
        case API_ERROR:
            state = {...state, apiError: action.payload, loading: false};
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