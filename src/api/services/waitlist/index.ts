import {post} from "helpers/axios";
import {subscribeToEmailUrl,} from "api/endpoints";


const subscribeToEmail = (data: object) => {
    return post(subscribeToEmailUrl, data);
}

const waitlistServices = {
    subscribeToEmail,
};

export default waitlistServices;
