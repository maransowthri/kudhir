import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import projectsReducer from "store/reducers/projects";
import fundsReducer from "store/reducers/funds";
import pagesReducer from "store/reducers/pages";
import { watchProjects, watchFunds, watchPages } from "store/sagas";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  projects: projectsReducer,
  funds: fundsReducer,
  pages: pagesReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(watchProjects);
sagaMiddleware.run(watchFunds);
sagaMiddleware.run(watchPages);

export default store;
