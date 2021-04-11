import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import projectListReducer from "store/reducers/projectList";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { watchProjectList } from "store/sagas";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  projectList: projectListReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(watchProjectList);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals(null);
