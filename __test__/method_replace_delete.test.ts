import { replace } from '../src/attribute'

describe('method', () => {
  const { location } = window
  beforeEach(() => {
    delete window.location
    window.location = {
      ...location,
      replace: jest.fn()
    }
  })
  afterEach(() => {
    window.location = location
  })
  it('mocks `reload`', () => {
    expect(jest.isMockFunction(window.location.replace)).toBe(true)
  });
  it('reload', () => {
    const original = window.location.href

    expect(window.location.replace).not.toHaveBeenCalled()

    replace()
    
    expect(window.location.href).toBe(original)
    expect(window.location.replace).toHaveBeenCalled()
  })
})