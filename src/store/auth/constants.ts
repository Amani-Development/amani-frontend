import {generateActions} from "helpers/generateActions";

//login
export const LOGIN_USER = generateActions("LOGIN_USER");

//register
export const REGISTER_USER = generateActions("REGISTER_USER");

export const RESET_PASSWORD = generateActions("RESET_PASSWORD");

export const CONFIRMRESET_PASSWORD = generateActions("CONFIRMRESET_PASSWORD");

export const RESENDACTIVATION_USER = generateActions("RESENDACTIVATION_USER");

export const API_ERROR = "API_ERROR";

export const CLEAR_API_ERROR = generateActions("CLEAR_API_ERROR");

