import types from "../actions/types";
import { all, put, takeLatest, select } from "redux-saga/effects";
import axios from "axios";

const getKeyword = (state) => state.keyword;

// Saga Watcher
function* searchMoviesWatcher() {
  yield takeLatest(types.SEARCH_MOVIES_REQUEST, searchMoviesWorker);
}

// Saga Worker
function* searchMoviesWorker() {
  try {
    let keyword = yield select(getKeyword);
    const response = yield axios.get(
      `https://www.omdbapi.com/?apikey=6d1f3e3e&s=${keyword}`
    );
    const movies = response.data.Search;

    yield put({ type: types.SEARCH_MOVIES_SUCCESS, movies: movies });
  } catch (error) {
    yield put({ type: types.SEARCH_MOVIES_FAILURE });
  }
}

// const delay = (ms) => new Promise((res) => setTimeout(res, ms));

// // Saga Watcher
// export function* watchPlusOrder() {
//   // yield take(types.PLUS_ORDER, handlePlusOrder);
//   yield takeEvery("PLUS_ORDER_ASYNC", handlePlusOrder);
// }

// // Saga Worker
// export function* handlePlusOrder() {
//   yield delay(2000);
//   yield console.log("Hey!");
//   yield put({ type: types.PLUS_ORDER });
// }

// Combine all saga watcher
function* rootSaga() {
  yield all([searchMoviesWatcher()]);
}

export default rootSaga;
