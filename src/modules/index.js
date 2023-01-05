import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import todoReducer, { todoSaga } from "./todo";
import counterReducer, { counterSaga } from "./counter";

// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const persistConfig = {
//     key: 'root',
//     storage: storage,
// }

const rootReducer = combineReducers({ counterReducer, todoReducer })

export function* rootSaga() {
    yield all([counterSaga(), todoSaga()])
}

export default rootReducer
// export default persistReducer(persistConfig, rootReducer)