
export const pingEpic = action$ => {
  return action$.ofType('PING')
    .delay(1000) // Asynchronously wait 1000ms then continue
    .mapTo({ type: 'PONG' });
  }

/*
  After an action goes through a reducer, it then comes through this epic, 
  it comes to action is a type 'PING', so this is true, then it waits 
  basically at one second and then it send dot map to type 'PONG'
  this might look kind of forigen, but basically what it's doing is,
  it issuing a new action call 'PONG', so a new action called 'PONG' will go through again
  and now if go to our reducer, when 'PONG' comes is paying as now false.
  And that's why you click this action it dispatches action it becomes true and then (after 1 second) rturns to false       
*/
