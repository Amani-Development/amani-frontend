import {API_ERROR, SUBSCRIBE_EMAIL, SUBSCRIBE_EMAIL_SUCCESS,} from "./constant";


export const subscribeToEmail = (data: any, callback: any) => {
    return {
        type: SUBSCRIBE_EMAIL,
        payload: {data, callback},
    };
};
export const subscribeToEmailSuccess = (response: any) => {
    return {
        type: SUBSCRIBE_EMAIL_SUCCESS,
        payload: response,
    };
};

export const waitlistError = (error: any) => {
    return {
        type: API_ERROR,
        payload: error,
    };
};