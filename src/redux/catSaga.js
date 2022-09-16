import { call, put, takeEvery } from "redux-saga/effects";
import { getCatsSuccess } from "./catSlice";

function* workGetCatsFetch() {
  const cats = yield call(() => fetch("https://api.thecatapi.com/v1/breeds"));
  const catsJson = yield cats.json();
  const catsFilter = catsJson.slice(0, 10);

  yield put(getCatsSuccess(catsFilter));
}

function* catSaga() {
  yield takeEvery("cats/getCatsFetch", workGetCatsFetch);
}

export default catSaga;
