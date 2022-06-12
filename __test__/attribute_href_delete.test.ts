import { changeHref } from '../src/attribute'

describe('attribute', () => {
  const { location } = window
  beforeEach(() => {
    delete window.location
  })
  afterEach(() => {
    window.location = location
  })
  it('should change href to http://test.com when newURL is http://test.com', () => {
    const newURL = "http://test.com"
    window.location = {
      ...location,
      href: ''
    }

    changeHref(newURL)

    expect(window.location.href).toBe(newURL)
  })
})