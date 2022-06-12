import {sendMessage} from '../src/attribute'

describe('multiple', () => {
  it('should be send when invoke the method sendMessage', () => {
    Object.defineProperty(window, 'top', {
      value: window,
      writable: true,
      enumerable: true,
      configurable: true,
    })
    Object.defineProperty(window, 'postMessage', {
      writable: true,
      value: jest.fn(),
    })

    sendMessage('message')

    expect(window.parent.postMessage).toBeCalledTimes(1)
  })
})