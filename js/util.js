function rest(f, args) {
  return Array.prototype.slice.call(args, f.length)
}

function sequence(prefix) {
  var num = 0
  return function() {
    num += 1
    return prefix + num
  }
}

function dig(path, object) {
  if (object === undefined || path.length < 1) {
    return object
  }
  return dig(path.slice(1), object[path[0]])
}
    
function watchBranch(store, path, callback) {
  var currentState = dig(path, store.getState())
  callback(undefined, currentState)
  return store.subscribe(function() {
    var newState = dig(path, store.getState())
    if (newState !== currentState) {
      callback(currentState, newState)
    }
  })
}
