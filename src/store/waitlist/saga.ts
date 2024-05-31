import { call, put, takeEvery } from "redux-saga/effects";
import { toast } from "react-toastify";
import waitlistServices from "api/services/waitlist";
import { errorHandler } from "helpers/errorHandler";

import { SUBSCRIBE_EMAIL } from "./constant";
import { ResponseGenerator } from "store/type";
import { subscribeToEmailSuccess, waitlistError } from './actions';

function* doSubscribeToEmail({ payload }: any) {
    try {
        console.log(payload);
        const { data, callback } = payload;
        const response: ResponseGenerator = yield call(waitlistServices.subscribeToEmail, data);

        yield put(subscribeToEmailSuccess(response.data));
        toast.success("Joined Amani Community Successfully");
        if (callback === undefined) {
        } else {
            callback();
        }
    } catch (error) {
        const message = errorHandler(error);
        yield put(waitlistError(message));

    }
}

function* waitlistSaga() {
    yield takeEvery(SUBSCRIBE_EMAIL, doSubscribeToEmail);
}

export default waitlistSaga;
