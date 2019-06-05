function debounce(fn, time) {
  return function(args) {
    let previousCall = this.lastCall
    this.lastCall = Date.now()

    if (previousCall && this.lastCall - previousCall <= time) {
      clearTimeout(this.lastCallTimer)
    }

    this.lastCallTimer = setTimeout(() => fn(args, time))
  }
}

module.exports = { debounce }
