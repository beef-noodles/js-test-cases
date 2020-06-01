import { changeHref } from '../src/attribute'

describe('attribute', () => {
  const { location } = window
  beforeEach(() => {
    delete window.location

  })
  afterEach(() => {
    window.location = location
  })
  it('1', () => {
    const newURL = "http://test.com"
    window.location = {
      href: ''
    }
    changeHref(newURL)
    expect(window.location.href).toBe(newURL)
  })
})