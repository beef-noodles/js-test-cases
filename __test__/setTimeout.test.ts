import { finalizedHandler, finalizedHandler1 } from '../src/setTimeout'

jest.useFakeTimers()

let setTimeoutSpy: jest.SpyInstance
let dummyResponse: Object
let mockFu: jest.Mock

beforeEach(() => {
  setTimeoutSpy = jest.spyOn(global, 'setTimeout')
  dummyResponse = {
    type: 'finalized',
    redirectUrl: 'test.com',
  }
  mockFu = jest.fn()
})

afterEach(() => {
  jest.clearAllMocks()
  jest.clearAllTimers()
})

describe('finalizedHandler', () => {
  it("should call callback & setTimeout", () => {
    finalizedHandler(dummyResponse, mockFu)
    jest.advanceTimersByTime(2000)

    expect(mockFu).toBeCalledTimes(1)
    expect(setTimeoutSpy).toBeCalledTimes(1)
  })
})

