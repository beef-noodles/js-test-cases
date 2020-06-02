import { changeHref } from '../src/attribute'

describe('attribute', () => {
  let windowSpy;
  beforeEach(() => {
    windowSpy= jest.spyOn(global, 'window', 'get')
  })
  afterEach(() =>{
    windowSpy.mockRestore()
  })

  it.todo("jest.spyOn 不适合 spy 属性， 一般用于方法")
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
    expect(window.location.href).toEqual('')
  })
})