import {eventListener} from '../src/attribute'

describe('addEventListener', () => {
  it('should print something and remove listenser when dispach an message event', () => {

    const postMessageSpy = jest.spyOn(window, 'postMessage')
    const removeEventListenerSpy = jest.spyOn(window, 'removeEventListener')
    eventListener()

    const messageBody = {
      data: 'addEventListener test case'
    }
    
    const messageEvent = new MessageEvent('message', messageBody) 
    window.dispatchEvent(messageEvent)

    expect(postMessageSpy).toBeCalledTimes(1)
    expect(postMessageSpy).toBeCalledWith(messageBody, '*')
    expect(removeEventListenerSpy).toBeCalledTimes(1)
  })
})
