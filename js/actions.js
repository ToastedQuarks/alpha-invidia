// import ./util.js

// Adapted from a function in Redux documentation (MIT license)
function actionMaker(type, argNames) {
  return function maker() {
    var args = rest(maker, arguments)
    var action = { type: type }
    argNames.forEach(function(arg, index) {
      action[argNames[index]] = args[index]
    })
    return action
  }
}

function actionConfig(type) {
  var argNames = rest(actionConfig, arguments)
  return {
    type: type,
    make: actionMaker(type, argNames)
  }
}

var act = {
  clockTick: actionConfig("CLOCK_TICK"),
  death: actionConfig("DEATH", "person", "cause")
}
