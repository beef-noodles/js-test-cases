import { reload } from '../src/attribute'

describe('method', () => {
  let windowSpy
  let originalWindow
  beforeEach(() => {
    originalWindow = global.window
    windowSpy = jest.spyOn(global.window, 'location', 'get').mockImplementation(() => ({
      ...originalWindow.location,
      reload: jest.fn(),
    }))
  })
  afterEach(() => {
    windowSpy.mockRestore()
  })
  it('mocks `reload`', () => {
    expect(jest.isMockFunction(windowSpy)).toBe(true)
  });
  it('spyOn for reload', () => {
    expect(windowSpy).not.toHaveBeenCalled()
    reload()
    expect(windowSpy).toHaveBeenCalled();
  })
})