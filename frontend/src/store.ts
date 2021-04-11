import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import projectListReducer from "store/reducers/projectList";
import projectDetailReducer from "store/reducers/projectDetail";
import fundsReducer from "store/reducers/funds";
import { watchProjectList, watchProjectDetail, watchFunds } from "store/sagas";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  projectList: projectListReducer,
  projectDetail: projectDetailReducer,
  funds: fundsReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(watchProjectList);
sagaMiddleware.run(watchProjectDetail);
sagaMiddleware.run(watchFunds);

export default store;
