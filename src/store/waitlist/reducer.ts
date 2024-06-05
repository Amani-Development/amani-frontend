import {API_ERROR, SUBSCRIBE_EMAIL, SUBSCRIBE_EMAIL_SUCCESS,} from "./constant";

const initialState = {
    error: null,
    loading: true,
    button_loading: false
};


const waitlist = (state = initialState, action) => {
    switch (action.type) {
        case SUBSCRIBE_EMAIL:
            return {
                ...state,
                loading: true,
                button_loading: true,
            };
        case SUBSCRIBE_EMAIL_SUCCESS:
            return {
                ...state,
                loading: false,
                button_loading: false,
            };
        case API_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false,
            };

        default:
            return state;
    }
};

export default waitlist;