import { createEpicMiddleware } from 'redux-observable';

// It will dispatch an action to the redux reducers
export const fetchUser = username => ({ type: 'FETCH_USER', payload: username });

export const fetchUserFulfilled = payload => ({ type: 'FETCH_USER_FULFILLED', payload });

export const cancelFetchUser = () => ({ type: 'FETCH_USER_CANCELLED' });

export const fetchUserRejected = payload => ({ type: 'FETCH_USER_REJECTED', payload, error: true });