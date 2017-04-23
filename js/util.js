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
    
function watchBranch(store, path, callback) {
  var dig = _.property(path)
  var curState = dig(store.getState())
  callback(curState, undefined)
  return store.subscribe(function() {
    var newState = dig(store.getState())
    if (!_.isEqual(curState, newState)) {
      callback(newState, curState)
    }
    curState = newState
  })
}

function updateIn(object, path, value) {
  path = _.toPath(path)
  if (path.length < 1) {
    return value
  }
  return Object.assign({}, object, {
    [path[0]]: updateIn(object[path[0]],
                        path.slice(1),
                        value)
  })
}
