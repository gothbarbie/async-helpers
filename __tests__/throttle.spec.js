const { throttle } = require('../throttle')

describe('Throttle', () => {
  it('Calls the logger at most once every two seconds', () => {
    let logger = args => console.log('Args:', args)

    let throttledLogger = throttle(logger, 2000)

    throttledLogger([1, 2, 3])
    throttledLogger([1, 2, 3])
    throttledLogger([1, 2, 3])
    throttledLogger([1, 2, 3])
    throttledLogger([1, 2, 3])

    // Console.log should only be run once
  })
})
