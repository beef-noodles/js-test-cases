import { changeHref } from '../src/attribute'

describe('attribute', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'location', {
      value: {
        href: '',
      },
    });
    // doesn't work
    // Object.defineProperty(window.location, 'href', {
    //   value: '',
    // });
  })
  it('Object.defineProperty', () => {
    const newURL = "http://test.com"
    changeHref(newURL)
    expect(window.location.href).toBe(newURL)
  })
})