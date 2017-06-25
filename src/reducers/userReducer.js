
export const user = (state = {
  login: "Max"
}, action) => {
  switch (action.type) {
    case 'FETCH_USER':
        return {};

    case 'FETCH_USER_FULFILLED':
      return {
        ...state,
        // `login` is the username
        // [action.payload.login]: action.payload
        login: action.payload
      };

    default:
      return state;
  }
};

//export default userReducer;

export const isFetchingUser = (state = false, action) => {
  switch (action.type) {
    case 'FETCH_USER':
      return true;

    case 'FETCH_USER_FULFILLED':
    case 'FETCH_USER_CANCELLED':
      return false;

    default:
      return state;
  }
};

export const fetchUserError = (state = null, action) => {
  switch (action.type) {
    case 'FETCH_USER':
    case 'FETCH_USER_FULFILLED':
      return null;

    case 'FETCH_USER_REJECTED':
      return action.payload;

    default:
      return state;
  }
};

