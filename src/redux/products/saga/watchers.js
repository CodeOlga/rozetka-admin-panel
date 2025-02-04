import { takeEvery } from "redux-saga/effects";

import productsAsyncAction from "./asyncAction";
import {
  callGetProductsWorker,
  callDeleteProductWorker,
  callAddProductWorker,
  callEditProductWorker,
} from "./workers";

export function* productsWatcher() {
  yield takeEvery(
    productsAsyncAction.getProductsAction.type,
    callGetProductsWorker
  );
  yield takeEvery(
    productsAsyncAction.deleteProductAction.type,
    callDeleteProductWorker
  );
  yield takeEvery(
    productsAsyncAction.addProductAction.type,
    callAddProductWorker
  );
  yield takeEvery(
    productsAsyncAction.editProductAction.type,
    callEditProductWorker
  );
}
