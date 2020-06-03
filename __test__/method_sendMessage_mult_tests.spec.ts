import {sendMessage} from '../src/attribute'

describe('multiple', () => {
  it('sendMessage test with multiple test method', () => {
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
    expect(window.parent.postMessage).toHaveBeenCalled()
    expect(window.parent.postMessage).toBeCalledTimes(1)
  })
})