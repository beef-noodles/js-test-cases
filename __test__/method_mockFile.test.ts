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
    expect(attribute.reload).not.toHaveBeenCalled();
    attribute.reload()
    expect(attribute.reload).toHaveBeenCalled()
    expect(attribute.reload).toBeCalledTimes(1)
  })
})