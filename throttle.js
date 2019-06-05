function throttle(fn, time) {
  return function (args) {
    let previousCall = this.lastCall
    this.lastCall = Date.now()

    if (previousCall === undefined)|| (this.lastCall - previousCall) > time) {
      fn(args)
    }
  }
}

module.exports = { throttle }
