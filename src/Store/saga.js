import { call, put, takeEvery } from "redux-saga/effects";
import Action from "./action";
import { fetchJokeApi } from "../Api";

//warker saga:-
function* fetchJoke(action) {
  console.log("fetch joke worker saga action", action);
  console.log("hello");
  try {
    const res = yield call(fetchJokeApi);
    console.log(res);
    yield put({ type: Action.FETCH_SUCCESS, payload: { joke: res.joke } });
  } catch (e) {
    yield put({ type: Action.FETCH_FAILED, payload: { message: e.message } });
  }
}

//watcher saga
function* mySaga() {
  yield takeEvery(Action.FETCH_REQUEST, fetchJoke);
}
export default mySaga;
