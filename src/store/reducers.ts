import {combineReducers} from "redux";

//User
import auth from "store/auth/reducer";
// Waitlist
import waitlist from "store/waitlist/reducer"

const rootReducer = combineReducers({
    //public
    auth,
    waitlist
});

export default rootReducer;
