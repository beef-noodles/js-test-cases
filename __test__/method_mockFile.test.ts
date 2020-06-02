import * as attribute from '../src/attribute'
jest.mock('../src/attribute', () => {
  return {
    __esModule: true,
    reload: jest.fn(),
  };
});

beforeEach( () => {
  jest.resetModules();
})
describe('method', () => {
  it('mocks `reload`', () => {
    expect(jest.isMockFunction(attribute.reload)).toBe(true);
  });
  it('reload', () => {
    const original = window.location.href
    expect(attribute.reload).not.toHaveBeenCalled();
    attribute.reload()
    expect(window.location.href).toBe(original)
    expect(attribute.reload).toHaveBeenCalled()
    expect(attribute.reload).toBeCalledTimes(1)
  })
})