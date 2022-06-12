import { addHash } from '../src/attribute'

describe('method', () => {
  let windowSpy
  beforeEach(() => {
    windowSpy = jest.spyOn(window, 'location', 'get')
  })
  afterEach(() => {
    windowSpy.mockRestore()
  })
  it('mocks `addHash`', () => {
    expect(jest.isMockFunction(windowSpy)).toBe(true)
  });
  it('spyOn for addHash', () => {
    windowSpy.mockImplementation(() => ({
      href: 'http://test.com',
    }))
    
    expect(windowSpy).not.toHaveBeenCalled()
    expect(addHash('123')).toEqual('http://test.com#123')
    expect(windowSpy).toHaveBeenCalled();
  })
})