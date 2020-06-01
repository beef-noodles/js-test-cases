import { changeHref } from '../src/attribute'

describe('attribute', () => {
  beforeEach(() => {
    Object.defineProperty(window.location, 'href', {
      value: '',
      writable: true,
    });
  })
  it('Object.defineProperty', () => {
    const newURL = "http://test.com"
    changeHref(newURL)
    expect(window.location.href).toBe(newURL)
  })
})