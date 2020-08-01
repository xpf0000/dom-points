import { expect } from 'chai'
import { pointToLineDistance } from "../src"

function test_pointToLineDistance (info, p, line, expected) {
  it(info, function (done) {
    expect(pointToLineDistance(p, line)).to.be.equal(expected)
    done()
  })
}

describe('TEST pointToLineDistance', function () {
  test_pointToLineDistance('{x: 0, y: 0}, [{x: 0, y: 0}, {x: 10, y: 0}]: 0', {x: 0, y: 0}, [{x: 0, y: 0}, {x: 10, y: 0}], 0)
  test_pointToLineDistance('{x: 0, y: 0}, [{x: 10, y: 0}, {x: 10, y: 10}]: 10', {x: 0, y: 0}, [{x: 10, y: 0}, {x: 10, y: 10}], 10)
  test_pointToLineDistance('{x: 0, y: 0}, [{x: 10, y: 10}, {x: 100, y: 10}]: 10', {x: 0, y: 0}, [{x: 10, y: 10}, {x: 100, y: 10}], 10)
  test_pointToLineDistance('{x: 0, y: 0}, [{x: 10, y: 0},{x: 0, y: 10}]: 7.071067811865475', {x: 0, y: 0}, [{x: 10, y: 0},{x: 0, y: 10}], 7.071067811865475)
})
