// What is an "Epic"
// A function that takes a stream of all actions dispatched, and returns a stream of actions to dispatch.

// Fake AJAX stuff for the demo


/*
Here we placed the .takeUntil() inside our .mergeMap(), but after our AJAX call; 
this is important because we want to cancel only the AJAX request, not stop the Epic from listening for any future actions.
*/ 

import { ajax } from 'rxjs/observable/dom/ajax';
import {Observable} from 'rxjs/Observable'

import { fetchUserFulfilled } from '../actions/userActions';
import { fetchUserRejected } from '../actions/userActions';

// ERROR HANDELING EXAMPLE
const ajaxShouldError = true;
let callCount = -1;
const fakeAjax = url => {
  callCount++;

  if (ajaxShouldError && callCount % 2 === 0) {
    return Observable.throw({
      xhr: {
        response: {
          message: 'AJAX CALL ERRORED!'
        }
      }
    }).materialize().delay(1000).dematerialize();
  } else {
    return Observable.of({
      id: url.substring(url.lastIndexOf('/') + 1),
      firstName: 'Bilbo',
      lastName: 'Baggins'
    }).delay(1000);    
  }
};

export const userEpic = action$ =>
  action$.ofType('FETCH_USER')
    .mergeMap(action =>
      fakeAjax(`/api/users/${action.payload}`)
        .map(response => fetchUserFulfilled(response))
        .catch(error => Observable.of(
          fetchUserRejected(error.xhr.response)
        ))
    );

// CANCELATION EXAMPLE

/*
const fakeAjax = url =>
  Observable.of({
    id: url.substring(url.lastIndexOf('/') + 1),
    firstName: 'Bilbo',
    lastName: 'Baggins'
  }).delay(3000);
*/

/*
export const userEpic = action$ =>
action$.ofType('FETCH_USER')
  .mergeMap(action =>
    fakeAjax(`/api/users/${action.payload}`)
      .pluck('lastName')
      .map(response => fetchUserFulfilled(response))
      .takeUntil(action$.ofType('FETCH_USER_CANCELLED'))
  );
*/   

// REGULAR EXAMPLE
/*export const userEpic = action$ =>
  action$.ofType('FETCH_USER')
    .mergeMap(action =>  
        //console.log(action);
        ajax.getJSON(`https://api.github.com/users/${action.payload}`)
            .pluck('login')
            .map(response => fetchUserFulfilled(response))
            .takeUntil(action$.ofType('FETCH_USER_CANCELLED'))
    );
*/









