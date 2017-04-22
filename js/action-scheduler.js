// import wu.js

// Adapted from original code by Marcelo Lazaroni
// https://stackoverflow.com/questions/36730793/dispatch-action-in-reducer
// Licensed under CC-BY-SA 3.0

// This middleware will just add the property "async dispatch"
// to actions with the "async" propperty set to true
var asyncDispatchMiddleware = _.curry(function(store, next, action) {
  var syncActivityFinished = false;
  var actionQueue = [];

  function flushQueue() {
    actionQueue.forEach(a => store.dispatch(a)); // flush queue
    actionQueue = [];
  }

  function asyncDispatch(asyncAction) {
    actionQueue = actionQueue.concat([asyncAction]);

    if (syncActivityFinished) {
      flushQueue();
    }
  }

  var actionWithAsyncDispatch =
    Object.assign({}, action, { asyncDispatch });

  next(actionWithAsyncDispatch);
  syncActivityFinished = true;
  flushQueue();
});
