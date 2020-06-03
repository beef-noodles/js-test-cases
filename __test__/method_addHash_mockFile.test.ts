import * as attribute from '../src/attribute'
jest.mock('../src/attribute', () => {
  return {
    __esModule: true,
    addHash: jest.fn(),
  };
});

beforeEach( () => {
  jest.resetModules();
})
describe('method', () => {
  it('mocks `addHash`', () => {
    expect(jest.isMockFunction(attribute.addHash)).toBe(true);
  });
  it('verify method has been invoked', () => {
    expect(attribute.addHash).not.toHaveBeenCalled();
    // will failed
    // expect(attribute.addHash('test')).toEqual('http://localhost/#test')
    attribute.addHash('234')
    expect(attribute.addHash).toHaveBeenCalled()
    expect(attribute.addHash).toBeCalledTimes(1)
    expect(attribute.addHash).toBeCalledWith('234')
  })
})