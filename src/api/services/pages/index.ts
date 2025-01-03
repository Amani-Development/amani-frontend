import {post, get} from "helpers/axios";
import {
getAllPublicPropertiesUrl
} from "api/endpoints";

const getPropertyData = (data: object) => {
    return get(getAllPublicPropertiesUrl);
};






const pageServices = {
   getPropertyData}

export default pageServices;
