import { changeHref } from '../src/attribute'

describe('attribute', () => {
  const { location } = window
  beforeEach(() => {
    Object.defineProperty(window, 'location', {
      value: {
        href: '',
      },
    });
  })
  afterEach(() => {
    Object.defineProperty(window, 'location', location)
  })
  it('Object.defineProperty', () => {
    const newURL = "http://test.com"

    changeHref(newURL)
    
    expect(window.location.href).toBe(newURL)
  })
})