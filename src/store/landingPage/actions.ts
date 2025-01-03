import {
   GETALLPROPERTIES

} from "store/landingPage/constants";


export const getAllPropertiesData = (params: Record<string, string>) => {
  return {
    type: GETALLPROPERTIES.REQUEST,
    payload: { params },
  };
};

export const getAllPropertiesSuccess = (response: any) => {
  return {
    type: GETALLPROPERTIES.SUCCESS,
    payload: response,
  };
};

export const getAllPropertiesFailure = (error: any) => {
  return {
    type: GETALLPROPERTIES.FAILURE,
    payload: error,
  };
};




