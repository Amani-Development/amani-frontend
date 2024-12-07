import {post} from "helpers/axios";
import {
    confirmresetPasswordUrl,
    loginUrl,
    registerUrl, resetPasswordUrl,
} from "api/endpoints";

const login = (data: object) => {
    return post(loginUrl, data);
};

const register = (data: object) => {
    return post(registerUrl, data);
};

const resetpassword = (data: object) => {
    return post(resetPasswordUrl, data);
};

const confirmresetpassword = (data: object) => {
    return post(confirmresetPasswordUrl, data);
};



const authServices = {
    login,
    register,
    resetpassword,
    confirmresetpassword
};

export default authServices;
