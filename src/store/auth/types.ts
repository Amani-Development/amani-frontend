export interface IUserSignin {
    email: string;
    password: string;
}

export interface IUserSignUp {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    country: string;
    phone_number: string;
    userType: string;
}

export interface IValidatePhoneAndEmail {
    email: string;
    phone: string;
}

export interface IValidateEmailAndPassword {
    email: string;
    password: string;
}

export interface IUserForgotPassword {
    email: string;
}
