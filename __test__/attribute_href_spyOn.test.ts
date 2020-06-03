import { changeHref } from '../src/attribute'

describe('attribute', () => {
  let windowSpy;
  beforeEach(() => {
    windowSpy= jest.spyOn(window, 'location', 'get')
  })
  afterEach(() =>{
    windowSpy.mockRestore()
  })

  it('jest.spyOn', () => {
    expect(window.location.href).toBe('http://localhost/')
    const newURL = "http://test.com"
    windowSpy.mockImplementation(() => ({
        href: ''
    }))
    changeHref(newURL)
    expect(windowSpy).toHaveBeenCalled()
    expect(window.location.href).toBe(newURL)
  })
})