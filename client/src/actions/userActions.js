const ROOT_URL = 'http://localhost:3001';

export const AUTH_USER = 'AUTH_USER';
export const UNAUTH_USER = 'UNAUTH_USER';
export const AUTH_ERROR = 'AUTH_ERROR';

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error,
  };
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export function signupUser({ email, password }, callback) {
  return (dispatch) => {
  // Submit email/password to the server
    fetch(`${ROOT_URL}/signup`, {
      method: 'post',
      body: JSON.stringify({ email, password }),
    })
      .then(handleErrors)
      .then(response => response.json())
      .then((data) => {
      // If request is good...
      // - Update state to indicate user is authenticated
        dispatch({ type: AUTH_USER });
        // - Save the JWT token
        localStorage.setItem('token', data.token);
        // - redirect to the home route '/' in callback
        callback();
      })
      .catch((err) => {
        console.log(err);
        // if request is bad...
        // - Show an error to the user
        dispatch(authError('Error has occurred'));
      });
  };
}

export function signinUser({ email, password }, callback) {
  return (dispatch) => {
  // Submit email/password to the server
    fetch(`${ROOT_URL}/signin`, {
      method: 'post',
      body: JSON.stringify({ email, password }),
    })
      .then(handleErrors)
      .then(response => response.json())
      .then((data) => {
      // If request is good...
      // - Update state to indicate user is authenticated
        dispatch({ type: AUTH_USER });
        // - Save the JWT token
        localStorage.setItem('token', data.token);
        // - redirect to the home route '/' in callback
        callback();
      })
      .catch((err) => {
        console.error(err);
        // if request is bad...
        // - Show an error to the user
        dispatch(authError('Bad Login Info'));
      });
  };
}

export function signoutUser() {
  localStorage.removeItem('token');
  return { type: UNAUTH_USER };
}

export function fetchMessage() {
  return (dispatch) => {
    fetch(`${ROOT_URL}/saved-jobs`, { method: 'get' })
      .then(response => console.log(response));
  };
}
