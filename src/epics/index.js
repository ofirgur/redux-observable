import { combineEpics } from 'redux-observable';

import { pingEpic } from './pingEpic';
import { userEpic } from './userEpic';
import { mathEpic } from './mathEpic';

export default combineEpics(
  pingEpic,
  userEpic,
  mathEpic
);