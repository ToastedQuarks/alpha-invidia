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

function curry(f) {
  if (f.length < 2 || typeof f !== 'function') {
    return f
  } else {
    return function(a) {
      return curry(f.apply(this, a))
    }
  }
}
