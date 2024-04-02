import { combineReducers } from "redux";

//User
import auth from "store/auth/reducer";

const rootReducer = combineReducers({
  //public
  auth,
});

export default rootReducer;
