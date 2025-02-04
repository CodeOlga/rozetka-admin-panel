import { call, put, select } from "redux-saga/effects";

import api from "../../../utils/api";
import { setItems, setLoading } from "../slice";

export function* callGetProductsWorker() {
  try {
    yield put(setLoading(true));

    const { data } = yield call(api.getProducts);

    yield put(setItems(data));
    yield put(setLoading(false));
  } catch (e) {
    yield put(setLoading(false));
    console.error(e);
  }
}

export function* callDeleteProductWorker(action) {
  try {
    yield put(setLoading(true));

    yield call(api.deleteProduct, action.payload);

    const currentProducts = yield select((state) => state.products.items);

    const updatedProducts = currentProducts.filter(
      (item) => item.id !== action.payload
    );

    yield put(setItems(updatedProducts));
    yield put(setLoading(false));
  } catch (e) {
    yield put(setLoading(false));
    console.error(e);
  }
}

export function* callAddProductWorker(action) {
  try {
    yield put(setLoading(true));

    const { data: products } = yield call(api.getProducts);

    const lastId =
      products.length > 0 ? Math.max(...products.map((p) => Number(p.id))) : 0;

    const newProduct = { ...action.payload, id: String(lastId + 1) };

    yield call(api.addProduct, newProduct);

    const { data } = yield call(api.getProducts);

    yield put(setItems(data));
    yield put(setLoading(false));
  } catch (e) {
    yield put(setLoading(false));
    console.error(e);
  }
}

export function* callEditProductWorker(action) {
  try {
    yield put(setLoading(true));

    yield call(api.editProduct, action.payload);

    const { data } = yield call(api.getProducts);

    yield put(setItems(data));
    yield put(setLoading(false));
  } catch (e) {
    yield put(setLoading(false));
    console.error(e);
  }
}
