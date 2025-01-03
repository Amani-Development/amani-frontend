import { call, put, takeEvery } from "redux-saga/effects";
import pageServices from "api/services/pages";
import { GETALLPROPERTIES } from "./constants";
import { getAllPropertiesSuccess, getAllPropertiesFailure } from "./actions";
import { errorHandler } from "../../helpers/errorHandler";

const generateDynamicUrl = (baseUrl: string, params: Record<string, string>): string => {
  const queryString = new URLSearchParams(params).toString();
  return `${baseUrl}?${queryString}`;
};

function* getAllProperties(action: { payload: { baseUrl: string; params: Record<string, string>; }; }): Generator {
  try {
    const { baseUrl, params } = action.payload;
    const dynamicUrl = generateDynamicUrl(baseUrl, params);
    const response = yield call(pageServices.getPropertyData, { url: dynamicUrl });

    yield put(getAllPropertiesSuccess(response));
  } catch (error) {
    const handledError = errorHandler(error);
    yield put(getAllPropertiesFailure(handledError));
    console.error("Error:", handledError);
  }
}

// function* pageSaga() {
//   yield takeEvery(GETALLPROPERTIES.REQUEST, getAllProperties);
// }

// export default pageSaga;