import { call, put, select } from "redux-saga/effects";
import api from "../../../utils/api";
import { setItems, setLoading } from "../slice";
// import { routes } from "../../../constants/routes";
// import { push } from "redux-first-history";

export function* callGetProductsWorker() {
  try {
    yield put(setLoading(true));
    const { data } = yield call(api.getProducts);
    console.log("API Response:", data);

    yield put(setItems(data));
    // yield put(push(routes.products.path));
    yield put(setLoading(false));
  } catch (e) {
    yield put(setLoading(false));
    console.error(e);
  }
}

export function* callDeleteProductWorker(action) {
  try {
    yield put(setLoading(true));
    yield call(api.deleteProduct, action.payload); // Отправляем запрос на удаление

    // // Получаем текущее состояние продуктов и удаляем продукт из массива

    const currentProducts = yield select((state) => state.products.items); // Получаем текущий список продуктов из состояния
    const updatedProducts = currentProducts.filter(
      (item) => item.id !== action.payload
    );

    // Обновляем состояние с новым списком продуктов
    yield put(setItems(updatedProducts));

    // const { data } = yield call(api.getProducts); // Получаем обновленный список продуктов
    // yield put(setItems(data)); // Обновляем состояние
    yield put(setLoading(false));
  } catch (e) {
    yield put(setLoading(false));
    console.error(e);
  }
}

// export function* callAddProductWorker(action) {
//   try {
//     // console.log("Payload in callAddProductWorker:", action.payload);

//     yield put(setLoading(true));
//     // Отправляем данные нового товара на сервер
//     yield call(api.addProduct, action.payload);
//     // После успешного добавления можно сразу перезапросить список товаров
//     const { data } = yield call(api.getProducts);
//     yield put(setItems(data));
//     yield put(setLoading(false));
//   } catch (e) {
//     yield put(setLoading(false));
//     console.error(e);
//   }
// }
export function* callAddProductWorker(action) {
  try {
    yield put(setLoading(true));

    // 1. Получаем текущий список товаров
    const { data: products } = yield call(api.getProducts);

    // 2. Определяем последний ID
    const lastId =
      products.length > 0 ? Math.max(...products.map((p) => p.id)) : 0;

    // 3. Создаём новый продукт с id = lastId + 1
    const newProduct = { ...action.payload, id: lastId + 1 };

    // 4. Отправляем данные нового товара на сервер
    yield call(api.addProduct, newProduct);

    // 5. Перезапрашиваем список товаров
    const { data } = yield call(api.getProducts);
    yield put(setItems(data));
    yield put(setLoading(false));
  } catch (e) {
    yield put(setLoading(false));
    console.error(e);
  }
}
