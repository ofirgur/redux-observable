import { combineReducers } from 'redux';

import ping from './pingReducer';
import { user, isFetchingUser, fetchUserError } from './userReducer';
import math from './mathReducer';

export default combineReducers({
  ping,
  user,
  isFetchingUser,
  fetchUserError,
  math
})

// When we export like the above, we can import it without {} because the default and we can give it any name 

// const reducers = combineReducers({
//   ping,
//   user
// })

// export default reducers;