import { changeHref } from '../src/attribute'

describe('attribute', () => {
  let windowSpy;
  beforeEach(() => {
    windowSpy= jest.spyOn(global, 'window', 'get')
  })
  afterEach(() =>{
    windowSpy.mockRestore()
  })
  // it('jest.spyOn', () => {
  //   const newURL = "http://test.com"
  //   windowSpy.mockImplementation(() => {
  //     location: {
  //       href: ''
  //     }
  //   })
  //   changeHref(newURL)
  //   expect(windowSpy.location.href).toBe(newURL)
  // })
})