import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import appReducer from "../reducers/appReducer";
const store = createStore(appReducer, composeWithDevTools());

export default store;
