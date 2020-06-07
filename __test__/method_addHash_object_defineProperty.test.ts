import { addHash } from '../src/attribute'

describe('method', () => {
  const { location } = window
  beforeEach(() => {
    Object.defineProperty(window, 'location', {
      value: {
        ...location,
        href: 'http://href.com',
      },
    })
  })
  afterEach(() => {
    Object.defineProperty(window, 'location', location)
  })
  it("should return http://href.com#123 when give 123", () => {
      expect(addHash('123')).toEqual('http://href.com#123')
    })
})