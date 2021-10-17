import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

/** NOTES
 * createStore method is a store creator which has the following signature: 
 * createStore = (reducer, preloadedState, enhancer) => Store
 * 
 * Redux Thunk is middleware that allows you to return functions, 
 * rather than just actions, within Redux
 */


const initialState = {};
const middleware = [thunk];

let store;

const ReactReduxDevTools =
  window.__REACT_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

  if (window.navigator.userAgent.includes("Chrome") && ReactReduxDevTools) {
      store = createStore(
          rootReducer,
          initialState,
          compose(
            applyMiddleware(...middleware),
            ReactReduxDevTools
          )
      );
  } else {
      store = createStore(
          rootReducer,
          initialState,
          compose(applyMiddleware(...middleware))
      );   
  }

  export default store;