import { changeHref } from '../src/attribute'

describe('attribute', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'location', {
      value: {
        href: '',
        writable: true,
        enumerable: true,
        configurable: true,
      },
      writable: true,
      enumerable: true,
      configurable: true,
    });
  })
  it('Object.defineProperty', () => {
    const newURL = "http://test.com"
    changeHref(newURL)
    expect(window.location.href).toBe(newURL)
  })
})