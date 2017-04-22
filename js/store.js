var store = Redux.createStore(reduceGlobal, Redux.applyMiddleware(asyncDispatchMiddleware))
