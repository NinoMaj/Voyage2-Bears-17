import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

let initialState = {};
const enhancers = [];
const middleware = [
  thunk,
];

// If we have a token, consider the user to be signed in
const token = localStorage.getItem('token');
if (token) {
  initialState = {
    user: {
      isLoggedIn: true,
    },
  };
}

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers,
);

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers,
);

export default store;
