import * as attribute from '../src/attribute'
jest.mock('../src/attribute', () => {
  return {
    __esModule: true,
    replace: jest.fn(),
  }
})

beforeEach( () => {
  jest.resetModules()
})
describe('method', () => {
  it('mocks `replace`', () => {
    expect(jest.isMockFunction(attribute.replace)).toBe(true)
  })
  it('replace', () => {
    expect(attribute.replace).not.toHaveBeenCalled()
    attribute.replace()
    expect(attribute.replace).toHaveBeenCalled()
    expect(attribute.replace).toBeCalledTimes(1)
  })
})