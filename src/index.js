import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import rootReducer, { rootSaga } from './modules';
import { Provider } from 'react-redux';
import createSagaMiddleware from '@redux-saga/core';
import { BrowserRouter } from 'react-router-dom';

// import { persistStore } from 'redux-persist';
// import { PersistGate } from 'redux-persist/integration/react';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))
// const persistor = persistStore(store)
sagaMiddleware.run(rootSaga)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        {/* <PersistGate persistor={persistor}> */}
        <App />
        {/* </PersistGate> */}
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
