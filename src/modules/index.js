import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import todoReducer from "./todo";
import counterReducer, { counterSaga } from "./counter";

const rootReducer = combineReducers({ counterReducer, todoReducer })
export function* rootSaga() {
    yield all([counterSaga()])
}
export default rootReducer