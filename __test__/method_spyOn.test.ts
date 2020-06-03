import { reload } from '../src/attribute'

describe('method', () => {
  let windowSpy
  beforeEach(() => {
    windowSpy = jest.spyOn(window, 'location', 'get')
  })
  afterEach(() => {
    windowSpy.mockRestore()
  })
  it('mocks `reload`', () => {
    expect(jest.isMockFunction(windowSpy)).toBe(true)
  });
  it('spyOn for reload', () => {
    windowSpy.mockImplementation(() => ({
      href: 'http://test.com',
      replace: jest.fn(),
    }))
    expect(windowSpy).not.toHaveBeenCalled()
    reload()
    expect(windowSpy).toHaveBeenCalled();
  })
})