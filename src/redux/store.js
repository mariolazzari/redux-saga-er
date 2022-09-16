import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import cat from "./catSlice";
import catSaga from "./catSaga";

// redux middlewares
const saga = createSagaMiddleware();
const middleware = [saga];

// redux store
const store = configureStore({
  reducer: {
    cat,
  },
  middleware,
});

// run sagas
saga.run(catSaga);

export default store;
