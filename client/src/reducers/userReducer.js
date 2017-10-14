import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
} from '../actions/userActions';

const initialState = {
  isLoading: false,
  isLoggedIn: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, isLoggedIn: true, error: null };
    case UNAUTH_USER:
      return { ...state, isLoggedIn: false, error: null };
    case AUTH_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default userReducer;
