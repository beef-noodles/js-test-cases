import { reload } from '../src/attribute'

describe('method', () => {
  const { location } = window
  beforeEach(() => {
    delete window.location;
  })
  afterEach(() => {
    window.location = location
  })
  it('reload', () => {
    window.location = {
      reload: jest.fn()
    }
    const original = window.location.href
    expect(window.location.reload).not.toHaveBeenCalled();
    reload()
    expect(window.location.href).toBe(original)
    expect(window.location.reload).toHaveBeenCalled();
  })
})