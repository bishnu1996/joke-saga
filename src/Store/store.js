import { applyMiddleware,createStore,compose } from "redux";
import createSagaMiddleware from 'redux-saga';
import reducer from './reducer';
//import jokeReduce from './reducer';
import mySaga from './saga';

const sagaMiddleware = createSagaMiddleware();


// const store = createStore(
//     reducer,
//     applyMiddleware(sagaMiddleware)
// );

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(mySaga);

export default store;