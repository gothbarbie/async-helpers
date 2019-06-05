const { debounce } = require('../debounce')

describe('Debounce', () => {
  it('calls the logger when two seconds has passed since the last call', () => {
    let logger = args => console.log(`My args are ${args}`)

    let debouncedLogger = debounce(logger, 2000)

    debouncedLogger([1, 2, 3])
    debouncedLogger([4, 5, 6])
    debouncedLogger([7, 8, 9])
  })
})
