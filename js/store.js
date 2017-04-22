var store = Redux.createStore(reduceGlobal, applyMiddleware(asyncDispatchMiddleware))
