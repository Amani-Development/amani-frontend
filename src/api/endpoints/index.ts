/**
 * API environment url
 */
//////////////auth
export const loginUrl = "/user/token/";
export const registerUrl = "/user/create/";
export const resetPasswordUrl = "user/password-reset/";
export const confirmresetPasswordUrl = `/user/password-reset-confirm/:uidb64/token/`;

export const resendactivationUrl = `user/resend_activation/`;
export const getAllPublicPropertiesUrl = `property/public-properties/`;


// waitlist
export const subscribeToEmailUrl = 'https://rankingamani.com/api/user/subscribe-email/'