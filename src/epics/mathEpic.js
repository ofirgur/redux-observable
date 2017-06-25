import { increment } from '../actions/mathActions';

export const mathEpic = (action$, store) =>
  action$.ofType('INCREMENT_IF_ODD')
    .filter(() => store.getState().counter % 2 === 1)
    .map(() => increment());