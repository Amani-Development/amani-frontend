import {
   GETALLPROPERTIES
} from "store/landingPage/constants";

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
    case GETALLPROPERTIES.REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
      };

    case GETALLPROPERTIES.SUCCESS:
      return {
        ...state,
        user_data: action.payload,
        Auth: true,
        loading: false,
        error: "",
      };

    case GETALLPROPERTIES.FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload, 
      };

    default:
      return state;
  }
};

export default auth;