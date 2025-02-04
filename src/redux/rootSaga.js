import { all, call } from "redux-saga/effects";

import { productsWatcher } from "./products/saga/watchers";

export function* rootSaga() {
  yield all([call(productsWatcher)]);
}
