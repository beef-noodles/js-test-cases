import { changeHref } from '../src/attribute'

describe('attribute', () => {
  let windowSpy;
  beforeEach(() => {
    windowSpy= jest.spyOn(global, 'window', 'get')
  })
  afterEach(() =>{
    windowSpy.mockRestore()
  })

  it('jest.spyOn', () => {
    expect(window.location.href).toBe('http://localhost/')
    const newURL = "http://test.com"
    windowSpy.mockImplementation(() => ({
      location: {
        href: ''
      }
    }))
    changeHref(newURL)
    console.log(window.location.href)
    expect(windowSpy).toHaveBeenCalled()
  })
})