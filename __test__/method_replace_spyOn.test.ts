import { replace } from '../src/attribute'

describe('method', () => {
  let windowSpy
  beforeEach(() => {
    windowSpy = jest.spyOn(window, 'location', 'get')
  })
  afterEach(() => {
    windowSpy.mockRestore()
  })
  it('mocks `replace`', () => {
    expect(jest.isMockFunction(windowSpy)).toBe(true)
  })
  it('spyOn for replace', () => {
    windowSpy.mockImplementation(() => ({
      href: 'http://test.com',
      replace: jest.fn(),
    }))
    expect(windowSpy).not.toHaveBeenCalled()
    replace()
    expect(windowSpy).toHaveBeenCalled()
  })
})