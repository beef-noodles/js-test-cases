import { addHash } from '../src/attribute'

describe('method', () => {
  const { location } = window
  beforeEach(() => {
    delete window.location;
    window.location = {
      ...location,
      href: 'http://href.com'
    }
  })
  afterEach(() => {
    window.location = location
  })

  it("should return http://href.com#123 when give 123", () => {
    expect(addHash('123')).toEqual('http://href.com#123')
  })
})