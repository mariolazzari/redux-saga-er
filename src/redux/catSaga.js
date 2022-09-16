import { call, put, takeEvery } from "redux-saga/effects";
import { getCatsSuccess, getCatsFailure } from "./catSlice";
import axios from "axios";

function* workGetCatsFetch() {
  try {
    const { data } = yield call(() =>
      axios.get("https://api.thecatapi.com/v1/breeds")
    );
    const catsFilter = data.slice(0, 10);

    yield put(getCatsSuccess(catsFilter));
  } catch (ex) {
    yield put(getCatsFailure(ex.message));
  }
}

function* catSaga() {
  yield takeEvery("cats/getCatsFetch", workGetCatsFetch);
}

export default catSaga;
