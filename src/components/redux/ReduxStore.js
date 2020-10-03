import { createStore } from "redux";
import { userReducer } from "./UserReducer";

export const storeUniversal = createStore(
  userReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
