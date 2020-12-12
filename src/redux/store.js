import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers/rootReducer";

import rootSaga from "./middleware/sagas";

// Saga
const sagaMiddleware = createSagaMiddleware();

// Store
const globalStore = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// Run saga
sagaMiddleware.run(rootSaga);

export default globalStore;
